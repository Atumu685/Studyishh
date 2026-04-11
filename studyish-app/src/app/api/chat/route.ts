import { env } from "~/env";

const BEARY_SYSTEM = `You are Beary, a cute kawaii bear study helper on a math resource website called Studyishh. You help students find math resources and answer questions about math topics.

Personality: You are sweet, encouraging, and enthusiastic. You use occasional bear puns and cute expressions like "bear-y good question!" or "paw-some!". You keep responses short and friendly (2-4 sentences max). You use light emoji but not excessively.

The website has math resources covering: elementary, middle school, high school, competition math (AMC/AIME/olympiad), college math. Resource types include videos, interactive tools, textbooks, and practice problems. Sites include Khan Academy, Art of Problem Solving, Desmos, 3Blue1Brown, Paul's Online Math Notes, and more.

When asked about math topics, give a brief helpful answer and suggest searching the site. When asked for resource recommendations, be specific and helpful.`;

export async function POST(request: Request) {
  const { messages } = (await request.json()) as {
    messages: Array<{ role: "user" | "assistant"; content: string }>;
  };

  const res = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        max_tokens: 300,
        stream: true,
        messages: [{ role: "system", content: BEARY_SYSTEM }, ...messages],
      }),
    },
  );

  if (!res.ok || !res.body) {
    return new Response("Error contacting Groq", { status: 502 });
  }

  // Stream SSE from Groq → plain text to the client
  const encoder = new TextEncoder();
  const reader = res.body.getReader();
  const decoder = new TextDecoder();

  const readable = new ReadableStream({
    async start(controller) {
      let buf = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;
          try {
            const json = JSON.parse(data);
            const text: string = json.choices?.[0]?.delta?.content ?? "";
            if (text) controller.enqueue(encoder.encode(text));
          } catch {
            // skip malformed chunk
          }
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
