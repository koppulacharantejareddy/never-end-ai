import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body?.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      input: message,
    });

    return NextResponse.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error("AI request failed:", error);

    return NextResponse.json(
      { error: "Never End AI could not process your request." },
      { status: 500 }
    );
  }
}
