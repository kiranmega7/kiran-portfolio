import { NextRequest } from "next/server";
import { kiranProfileContext } from "@/lib/kiran-profile";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return new Response("Missing ANTHROPIC_API_KEY", { status: 500 });
  }

  const body = (await request.json()) as { messages?: ChatMessage[] };
  const messages = body.messages || [];
  const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
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
  });

  if (!anthropicResponse.ok || !anthropicResponse.body) {
    const errorText = await anthropicResponse.text();
    return new Response(errorText || "Anthropic request failed", { status: 500 });
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

            const parsed = JSON.parse(payload) as {
              type?: string;
              delta?: { text?: string };
            };

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
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
