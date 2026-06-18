import { responses } from "@/data/chatbotData";

const fallbacks = [
  "Sorry, I didn't understand that. Try asking about skills, projects, or contact.",
  "Hmm, I'm not sure about that one. Try asking about Hammad's skills, experience, or how to get in touch.",
  "I don't have an answer for that yet. Try asking about his tech stack, projects, or resume.",
];

export async function POST(req) {
  try {
    const { message } = await req.json();
    const text = message.toLowerCase().trim();

    if (!text) {
      return Response.json(
        { reply: "Please enter a message." },
        { status: 400 }
      );
    }

    const match = responses.find((item) =>
      item.keywords.some((keyword) => text.includes(keyword))
    );

    let reply;
    let link = null;

    if (match) {
      reply = match.replies[Math.floor(Math.random() * match.replies.length)];
      link = match.link || null;
    } else {
      reply = fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    return Response.json({ reply, link });
  } catch (error) {
    return Response.json(
      { reply: "Something went wrong." },
      { status: 500 }
    );
  }
}