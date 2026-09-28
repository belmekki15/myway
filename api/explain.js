// Vercel serverless function: keeps your API key on the server, never in the browser.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { mode, traits, matches } = req.body || {};
  const valid =
    ["university", "career"].includes(mode) &&
    traits && typeof traits === "object" &&
    Array.isArray(matches) && matches.length > 0 && matches.length <= 5;
  if (!valid) return res.status(400).json({ error: "Invalid input" });

  const goal = mode === "university" ? "a field of study at university" : "a career direction after graduating";
  const prompt = `A person took a questionnaire to find ${goal}.
Trait scores (0-100): ${JSON.stringify(traits)}
Best matches (name and match %): ${JSON.stringify(matches)}

Write a warm, honest explanation in 3 short paragraphs:
1. Their main skills and personality, based on the top traits.
2. Why the number one match fits them, and why the others are also worth considering.
3. Two concrete next steps.
Use plain language, address them as "you", and do not use headings or lists.`;

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 600,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    if (!r.ok) return res.status(502).json({ error: "AI unavailable" });
    const data = await r.json();
    // Try to extract the text from several common AI response shapes
    let text = "";
    if (typeof data === "string") {
      text = data;
    } else if (data.completion) {
      text = data.completion;
    } else if (data.output && Array.isArray(data.output) && data.output[0]?.content) {
      const c = data.output[0].content;
      text = Array.isArray(c) ? c.map((p) => p.text || p).join("") : c.text || c;
    } else if (data.choices?.[0]?.message?.content) {
      const c = data.choices[0].message.content;
      text = Array.isArray(c) ? c.map((p) => p.text || p).join("") : c.text || c;
    } else if (data.choices?.[0]?.text) {
      text = data.choices[0].text;
    } else if (data.message?.content) {
      const c = data.message.content;
      text = Array.isArray(c) ? c.map((p) => p.text || p).join("") : c.text || c;
    } else if (data?.content?.[0]?.text) {
      text = data.content[0].text;
    }

    // Log the full response on the server to help debugging if needed
    console.debug("AI response:", data);

    res.status(200).json({ text: text ?? "" });
  } catch {
    res.status(502).json({ error: "AI unavailable" });
  }
}
