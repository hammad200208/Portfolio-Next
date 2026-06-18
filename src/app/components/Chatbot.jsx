"use client";

import { useState, useEffect, useRef } from "react";
import { FiMessageCircle } from "react-icons/fi";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me about Hammad 👋", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto focus
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = async (customMessage) => {
    const messageToSend = customMessage || input;

    if (!messageToSend.trim()) return;

    const userMessage = { text: messageToSend, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await res.json();

      // Fake typing delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      setMessages((prev) => [
        ...prev,
        { text: data.reply, sender: "bot", link: data.link },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Server error. Please try again.", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  const suggestions = ["Skills", "Projects", "Contact"];

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle chat"
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
      >
        <FiMessageCircle size={18} />
        Chat
      </button>

      {/* Chat Window */}
      {open && (
        <div className="w-80 h-[420px] bg-white dark:bg-gray-900 shadow-xl rounded-2xl mt-2 flex flex-col">

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {msg.text}
                {msg.link && (
                  <a
                    href={msg.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-1 text-blue-600 dark:text-blue-300 underline font-medium"
                  >
                    {msg.link.label}
                  </a>
                )}
              </div>
            ))}

            {loading && (
              <div className="text-sm text-gray-500 italic">
                Hammad's Assistant is typing...
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          {/* Suggestions */}
          <div className="px-2 pb-2 flex flex-wrap gap-2">
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => sendMessage(item.toLowerCase())}
                className="text-xs bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 flex gap-2 border-t">
            <input
              ref={inputRef}
              className="flex-1 border rounded-lg px-2 py-1 text-sm dark:bg-gray-800"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask something..."
            />
            <button
              onClick={() => sendMessage()}
              className="bg-blue-600 text-white px-3 rounded-lg"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </div>
  );
}