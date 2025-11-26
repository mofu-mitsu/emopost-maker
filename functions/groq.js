export async function onRequestPost(context) {
  const key = context.env.GROQ_API_KEY;

  const req = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: await context.request.text()
  });

  return new Response(await req.text(), { 
    headers: { "Content-Type": "application/json" }
  });
}
