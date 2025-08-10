"use client";
import { useState, useEffect, useRef } from "react";
import { Send, Sparkles } from "lucide-react";
import { MultiStepLoaderDemo } from "@/app/loader";
import ReactMarkdown from "react-markdown";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const predefinedPrompts = [
    "Discover Vectrium's AI vision",
    "Vectrium's automation edge",
    "AI agents powered by Vectrium"
  ];

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text }),
      });

      const data = await res.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: "ai", text: data.text }]);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    setInput("");
  };

  // Auto scroll when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center w-full">
      <div className="w-full  max-w-4xl relative z-10 ">
        
        {/* Chat Window */}
        <div className="mb-6 p-6 rounded-2xl h-96 overflow-y-auto overflow-x-hidden bg-transparent relative">
          <div className="absolute inset-0 rounded-2xl bg-transparent pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-transparent flex items-center justify-center backdrop-blur-lg">
                  <Sparkles className="w-8 h-8 text-silver-300" />
                </div>
                <p className="text-lg font-medium">Start a conversation</p>
                <p className="text-sm text-gray-500">
                  Choose a prompt below or type your own message
                </p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
              ref={messagesEndRef}
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-xl backdrop-blur-lg shadow-lg ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-silver-500/20 to-gray-400/20 text-silver-100"
                      : "bg-gradient-to-r from-black/50 to-gray-900/50 text-gray-200"
                  }`}
                >
                  <div className="prose prose-invert max-w-none break-words" >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}

            {loading && <MultiStepLoaderDemo />}

          </div>
        </div>

        {/* Input Area */}
        <div className="mb-6">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
              placeholder="Type your message..."
              className="w-full p-4 pr-14 rounded-xl bg-black/40 text-silver-100 resize-none focus:outline-none backdrop-blur-xl shadow-lg placeholder-gray-400 transition-all duration-200"
              rows={2}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-silver-400/5 via-transparent to-gray-400/5 pointer-events-none"></div>
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-silver-500/20 to-gray-400/20 rounded-lg hover:from-silver-400/30 hover:to-gray-300/30 transition-all duration-200 backdrop-blur-xl disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <Send className="text-silver-200 w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Predefined Prompts - Hidden on mobile */}
        <div className="hidden sm:flex flex-wrap gap-3 justify-center">
          {predefinedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => sendMessage(prompt)}
              className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-xl text-silver-100 shadow-lg group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] focus:outline-none"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-silver-400/5 via-transparent to-gray-400/5 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <span className="relative z-10 font-medium">{prompt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
