import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: google('models/gemini-pro'),
    prompt,
  });

  return result.toDataStreamResponse();
}