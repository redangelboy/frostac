"use client"

import { MessageSquare, Sparkles, Zap, ArrowRight } from "lucide-react"

export default function AIChatBanner() {
  const handleOpenChat = () => {
    // Dispatch custom event to open the AI chat modal
    window.dispatchEvent(new CustomEvent("open-ai-chat"))
  }

  return (
    <section
      className="py-16 relative overflow-hidden section-reveal"
      style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 60%, #1a4a7a 100%)" }}
      aria-label="AI Chat assistant promotion"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3"
        style={{ background: "radial-gradient(circle, var(--blue), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-1/2 -translate-x-1/3"
        style={{ background: "radial-gradient(circle, var(--orange), transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left icon area */}
          <div className="flex-shrink-0 relative">
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center pulse-blue"
              style={{
                background: "linear-gradient(135deg, var(--blue), rgba(33,150,243,0.7))",
                boxShadow: "0 12px 40px rgba(33,150,243,0.35)",
              }}
            >
              <MessageSquare size={44} color="white" strokeWidth={1.5} />
            </div>
            {/* Floating sparkle */}
            <div
              className="absolute -top-2 -right-2 w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "var(--orange)", boxShadow: "0 4px 12px rgba(232,99,10,0.5)" }}
            >
              <Sparkles size={16} color="white" />
            </div>
          </div>

          {/* Center content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
              style={{
                backgroundColor: "rgba(33,150,243,0.2)",
                border: "1px solid rgba(33,150,243,0.35)",
                color: "var(--blue-light)",
              }}
            >
              <Zap size={12} />
              AI-Powered Support
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 text-balance">
              Talk to Our AI Assistant —{" "}
              <span style={{ color: "var(--blue-light)" }}>Get Answers 24/7</span>
            </h2>
            <p className="text-base lg:text-lg leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.72)" }}>
              No hold music. No waiting. Our AI assistant can answer your HVAC questions,
              help you schedule service, and provide instant quotes — any time of day.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
              {["Instant Answers", "Schedule Service", "Get Estimates", "Troubleshooting Help"].map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleOpenChat}
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, var(--blue), var(--blue-light))",
                boxShadow: "0 8px 32px rgba(33,150,243,0.4)",
              }}
            >
              <MessageSquare size={20} />
              Try Our AI Chat
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-center mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
              No account needed — chat instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
