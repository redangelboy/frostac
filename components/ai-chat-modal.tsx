"use client"

import { useState, useEffect, useRef } from "react"
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  role: "assistant" | "user"
  content: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    content: "Hi! I'm the Frost Heating & Air AI assistant. I can help you with HVAC questions, scheduling service, or getting a quote. How can I help you today?",
  },
]

const SUGGESTED = [
  "Get a free estimate",
  "AC not cooling — help!",
  "Maintenance plan info",
  "Emergency service?",
]

export default function AIChatModal() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Listen for open-ai-chat event from AI banner
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener("open-ai-chat", handler)
    return () => window.removeEventListener("open-ai-chat", handler)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  async function sendMessage(text: string) {
    if (!text.trim()) return
    const userMsg: Message = { role: "user", content: text }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const history = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }))

      const res = await fetch("https://llm.blackbox.ai/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer xxx",
          customerId: "cus_SRCyrw8bzu6r2v",
        },
        body: JSON.stringify({
          model: "openrouter/claude-sonnet-4",
          messages: [
            {
              role: "system",
              content: `You are a helpful AI assistant for Frost Heating & Air, a professional HVAC company based in Lewisville, Texas. The company was established in 1994 and has over 30 years of experience. They are NATE-certified, offer 24/7 emergency service, and serve the Dallas-Fort Worth Metroplex. Services include AC installation & repair, heating installation & repair, HVAC maintenance plans, indoor air quality, and insulation. Phone: 972-874-1001 (after 5pm: 972-816-8116). Address: 320 Smith Street, Lewisville, Texas 75057. Financing available through Hearth up to $250,000. Be friendly, professional, and concise. Help customers understand their HVAC needs, schedule service, or get estimates. Always encourage them to call for emergencies.`,
            },
            ...history,
          ],
        }),
      })

      const data = await res.json()
      const reply = data?.choices?.[0]?.message?.content ?? "I'm sorry, I had trouble connecting. Please call us at 972-874-1001 for immediate assistance."
      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having connection issues right now. Please call us at 972-874-1001 for immediate help!" },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl pulse-blue"
        style={{
          background: "linear-gradient(135deg, var(--navy), var(--blue))",
          boxShadow: "0 8px 28px rgba(33,150,243,0.45)",
        }}
        aria-label="Open AI chat assistant"
      >
        <MessageSquare size={18} />
        AI Support
        <Sparkles size={14} style={{ color: "rgba(255,255,255,0.75)" }} />
      </button>

      {/* Mobile floating call button */}
      <a
        href="tel:9728741001"
        className="fixed bottom-6 left-6 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-2xl text-white pulse-glow"
        style={{
          background: "linear-gradient(135deg, var(--orange), var(--orange-light))",
          boxShadow: "0 6px 20px rgba(232,99,10,0.45)",
        }}
        aria-label="Call Frost Heating and Air"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
      </a>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          style={{ backgroundColor: "rgba(10,37,64,0.5)", backdropFilter: "blur(4px)" }}
        >
          <div
            className="w-full sm:w-96 rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col"
            style={{
              backgroundColor: "var(--white)",
              boxShadow: "0 24px 80px rgba(10,37,64,0.3)",
              maxHeight: "85vh",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, var(--navy), var(--navy-light))" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--blue), var(--blue-light))" }}
                >
                  <Bot size={18} color="white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Frost AI Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors hover:bg-white/15 text-white"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ backgroundColor: "var(--light-bg)" }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: msg.role === "assistant" ? "var(--navy)" : "var(--orange)",
                    }}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={14} color="white" />
                    ) : (
                      <User size={14} color="white" />
                    )}
                  </div>
                  <div
                    className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                    style={
                      msg.role === "assistant"
                        ? {
                            backgroundColor: "var(--white)",
                            color: "var(--text-dark)",
                            borderBottomLeftRadius: "4px",
                            border: "1px solid var(--light-bg-2)",
                          }
                        : {
                            backgroundColor: "var(--navy)",
                            color: "var(--white)",
                            borderBottomRightRadius: "4px",
                          }
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-2.5">
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "var(--navy)" }}
                  >
                    <Bot size={14} color="white" />
                  </div>
                  <div
                    className="px-3.5 py-3 rounded-2xl"
                    style={{ backgroundColor: "var(--white)", border: "1px solid var(--light-bg-2)", borderBottomLeftRadius: "4px" }}
                  >
                    <div className="flex items-center gap-1">
                      {[0, 150, 300].map((delay) => (
                        <div
                          key={delay}
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{ backgroundColor: "var(--text-muted)", animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-4 pt-3 pb-1 flex flex-wrap gap-2 border-t" style={{ borderColor: "var(--light-bg-2)" }}>
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all hover:scale-105"
                    style={{
                      backgroundColor: "rgba(33,150,243,0.08)",
                      color: "var(--blue)",
                      border: "1px solid rgba(33,150,243,0.2)",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div
              className="flex items-center gap-2 p-3 border-t"
              style={{ borderColor: "var(--light-bg-2)", backgroundColor: "var(--white)" }}
            >
              <input
                type="text"
                placeholder="Ask about our HVAC services..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input) } }}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                style={{
                  backgroundColor: "var(--light-bg)",
                  border: "1.5px solid var(--light-bg-2)",
                  color: "var(--text-dark)",
                }}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:scale-105 disabled:opacity-40"
                style={{ background: "linear-gradient(135deg, var(--orange), var(--orange-light))" }}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
