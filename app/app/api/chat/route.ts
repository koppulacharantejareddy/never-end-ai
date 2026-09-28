import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const message = body?.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const client = new OpenAI({
      apiKey,
    });

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      input: message,
    });

    return NextResponse.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error("Never End AI API error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Never End AI could not process your request.",
      },
      { status: 500 }
    );
  }
}
