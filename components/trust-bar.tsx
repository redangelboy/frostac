import { ShieldCheck, Clock, Award, BadgeCheck, DollarSign } from "lucide-react"

const trustItems = [
  {
    icon: Award,
    title: "30+ Years Experience",
    subtitle: "Est. 1994",
  },
  {
    icon: BadgeCheck,
    title: "NATE-Certified",
    subtitle: "Expert Technicians",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    subtitle: "365 Days a Year",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    subtitle: "Fully Bonded",
  },
  {
    icon: DollarSign,
    title: "Free Estimates",
    subtitle: "No Surprises",
  },
]

export default function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="py-6 border-b section-reveal"
      style={{ backgroundColor: "var(--white)", borderColor: "var(--light-bg-2)" }}
      aria-label="Trust indicators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0 sm:divide-x" style={{ "--tw-divide-opacity": "1" } as React.CSSProperties}>
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`flex items-center gap-3 px-6 py-3 ${i > 0 ? "sm:border-l" : ""}`}
                style={{ borderColor: "var(--light-bg-2)" }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "rgba(232,99,10,0.1)", color: "var(--orange)" }}
                >
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold leading-tight" style={{ color: "var(--text-dark)" }}>
                    {item.title}
                  </div>
                  <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                    {item.subtitle}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
