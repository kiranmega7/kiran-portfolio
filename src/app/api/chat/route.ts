import { NextRequest } from "next/server";
import { kiranProfileContext } from "@/lib/kiran-profile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5";

  if (!apiKey) {
    return new Response("Missing ANTHROPIC_API_KEY", { status: 500 });
  }

  const body = (await request.json()) as { messages?: ChatMessage[] };
  const messages = body.messages || [];
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);

  let anthropicResponse: Response;
  try {
    anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model,
        max_tokens: 600,
        stream: true,
        system: `You are a portfolio assistant for Kiran Veeranala.
Always speak about Kiran in third person (he/him, Kiran).
Only answer based on the profile below.
If asked for unavailable details, say that information is not listed on the portfolio.

Profile:
${kiranProfileContext}`,
        messages: messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
      }),
      signal: controller.signal,
    });
  } catch (error) {
    const reason =
      error instanceof Error ? error.message : "Unknown upstream fetch error";
    return new Response(
      JSON.stringify({
        type: "proxy_error",
        message: "Failed to reach Anthropic from server runtime.",
        reason,
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      },
    );
  } finally {
    clearTimeout(timeout);
  }

  if (!anthropicResponse.ok || !anthropicResponse.body) {
    const errorText = await anthropicResponse.text();
    return new Response(errorText || "Anthropic request failed", {
      status: anthropicResponse.status || 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  const responseBody = anthropicResponse.body;

  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    async start(controller) {
      try {
        const reader = responseBody.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let buffer = "";

        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;
          if (!value) continue;

          buffer += decoder.decode(value, { stream: true });
          const events = buffer.split("\n\n");
          buffer = events.pop() || "";

          for (const event of events) {
            const dataLine = event
              .split("\n")
              .find((line) => line.startsWith("data: "));
            if (!dataLine) continue;

            const payload = dataLine.replace("data: ", "").trim();
            if (payload === "[DONE]") continue;

            let parsed: {
              type?: string;
              delta?: { text?: string };
            };
            try {
              parsed = JSON.parse(payload);
            } catch {
              continue;
            }

            if (parsed.type === "content_block_delta" && parsed.delta?.text) {
              controller.enqueue(encoder.encode(parsed.delta.text));
            }
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readableStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
