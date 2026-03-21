import { DollarSign, CheckCircle2, Zap, ArrowRight } from "lucide-react"

const features = [
  { label: "Loan amounts up to $250,000", icon: DollarSign },
  { label: "No home equity required" },
  { label: "No prepayment penalties" },
  { label: "Funding in as little as 1-3 days" },
  { label: "Check rates — won't affect your credit score" },
  { label: "Simple online application process" },
]

export default function FinancingSection() {
  return (
    <section
      id="financing"
      className="py-24 relative overflow-hidden section-reveal"
      style={{ backgroundColor: "var(--white)" }}
      aria-label="Financing options"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(33,150,243,0.07), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ backgroundColor: "rgba(33,150,243,0.1)", color: "var(--blue)" }}
            >
              <Zap size={12} />
              Flexible Financing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 text-balance leading-tight" style={{ color: "var(--text-dark)" }}>
              Don&apos;t Let Cost Stop{" "}
              <span style={{ color: "var(--navy)" }}>Your Comfort</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              We&apos;ve partnered with{" "}
              <strong style={{ color: "var(--navy)" }}>Hearth</strong> to offer flexible financing
              options that make it easy to get the HVAC system you need without the financial stress.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {features.map((f) => (
                <li key={f.label} className="flex items-center gap-3">
                  <CheckCircle2 size={18} style={{ color: "var(--blue)", flexShrink: 0 }} strokeWidth={2.5} />
                  <span className="text-sm font-medium" style={{ color: "var(--text-dark)" }}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="tel:9728741001"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, var(--navy), var(--navy-light))",
                boxShadow: "0 8px 28px rgba(10,37,64,0.3)",
              }}
            >
              Learn About Financing
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Right — Feature card */}
          <div className="section-reveal stagger-2">
            <div
              className="relative rounded-3xl overflow-hidden p-8"
              style={{
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                boxShadow: "0 20px 60px rgba(10,37,64,0.25)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 opacity-20 -translate-y-1/3 translate-x-1/3 rounded-full"
                style={{ background: "radial-gradient(circle, var(--blue-light), transparent)" }}
              />

              {/* Hearth partner badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <DollarSign size={16} style={{ color: "var(--orange)" }} />
                Financing through Hearth
              </div>

              {/* Main stat */}
              <div className="mb-6">
                <div className="text-6xl font-extrabold text-white leading-none mb-2">$250K</div>
                <div className="text-base" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Maximum loan amount available
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "1-3 Days", label: "To Funding" },
                  { value: "$0", label: "Prepayment Penalty" },
                  { value: "0%", label: "Credit Score Impact" },
                  { value: "No", label: "Home Equity Required" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="text-2xl font-extrabold text-white leading-none">{stat.value}</div>
                    <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:9728741001"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, var(--orange), var(--orange-light))",
                  boxShadow: "0 6px 20px rgba(232,99,10,0.35)",
                }}
              >
                Apply for Financing Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
