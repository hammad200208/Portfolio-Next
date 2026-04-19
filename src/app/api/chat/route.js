import { responses } from "@/data/chatbotData";

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

    const reply = match
      ? match.reply
      : "Sorry, I didn't understand that. Try asking about skills, projects, or contact.";

    return Response.json({ reply });
  } catch (error) {
    return Response.json(
      { reply: "Something went wrong." },
      { status: 500 }
    );
  }
}