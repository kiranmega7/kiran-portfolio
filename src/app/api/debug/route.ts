import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.ANTHROPIC_API_KEY ?? "";
  const model = process.env.ANTHROPIC_MODEL ?? "";

  return NextResponse.json({
    anthropicApiKeyPrefix: apiKey ? apiKey.slice(0, 5) : null,
    anthropicApiKeySet: Boolean(apiKey),
    anthropicModelSet: Boolean(model),
    anthropicModelValue: model || null,
  });
}
