import { Check, Star, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$149",
    period: "/year",
    description: "Essential maintenance to keep your system running reliably.",
    features: [
      "1 Annual HVAC Tune-Up",
      "Filter Replacement (1x)",
      "Safety Inspection",
      "Priority Scheduling",
      "10% Discount on Repairs",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$249",
    period: "/year",
    description: "Our most popular plan for year-round peace of mind.",
    features: [
      "2 Seasonal Tune-Ups",
      "Filter Replacement (2x)",
      "Safety & Efficiency Inspection",
      "Priority Emergency Service",
      "15% Discount on Repairs",
      "Free Diagnostic Visits",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$399",
    period: "/year",
    description: "Complete coverage for maximum efficiency and protection.",
    features: [
      "4 Quarterly Tune-Ups",
      "Unlimited Filter Replacements",
      "Full System Inspection",
      "24/7 Priority Emergency Response",
      "20% Discount on All Repairs",
      "Free Diagnostic Visits",
      "Indoor Air Quality Check",
      "Duct Inspection Included",
    ],
    cta: "Best Value",
    highlighted: false,
  },
]

export default function MaintenancePlans() {
  return (
    <section id="maintenance" className="py-24 section-reveal" style={{ backgroundColor: "var(--light-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "rgba(232,99,10,0.1)", color: "var(--orange)" }}
          >
            Maintenance Plans
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-balance" style={{ color: "var(--text-dark)" }}>
            Protect Your Investment
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Regular maintenance extends equipment life, reduces energy costs, and prevents
            expensive breakdowns. Choose the plan that fits your needs.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundColor: plan.highlighted ? "var(--navy)" : "var(--white)",
                border: plan.highlighted
                  ? "2px solid var(--orange)"
                  : "1.5px solid var(--light-bg-2)",
                boxShadow: plan.highlighted
                  ? "0 20px 60px rgba(10,37,64,0.25)"
                  : "0 4px 16px rgba(10,37,64,0.06)",
              }}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, var(--orange), var(--orange-light))" }}
                >
                  <Star size={12} fill="white" />
                  Most Popular
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan name */}
                <div
                  className="text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ color: plan.highlighted ? "var(--orange)" : "var(--text-muted)" }}
                >
                  {plan.name} Plan
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-3">
                  <span
                    className="text-5xl font-extrabold leading-none"
                    style={{ color: plan.highlighted ? "var(--white)" : "var(--text-dark)" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-base pb-1"
                    style={{ color: plan.highlighted ? "rgba(255,255,255,0.55)" : "var(--text-muted)" }}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: plan.highlighted ? "rgba(255,255,255,0.7)" : "var(--text-muted)" }}
                >
                  {plan.description}
                </p>

                {/* Divider */}
                <div
                  className="h-px mb-6"
                  style={{ backgroundColor: plan.highlighted ? "rgba(255,255,255,0.12)" : "var(--light-bg-2)" }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: plan.highlighted ? "var(--orange)" : "var(--blue)" }}
                        strokeWidth={3}
                      />
                      <span
                        className="text-sm"
                        style={{ color: plan.highlighted ? "rgba(255,255,255,0.85)" : "var(--text-dark)" }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="tel:9728741001"
                  className="group flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                  style={
                    plan.highlighted
                      ? {
                          background: "linear-gradient(135deg, var(--orange), var(--orange-light))",
                          color: "var(--white)",
                          boxShadow: "0 6px 20px rgba(232,99,10,0.35)",
                        }
                      : {
                          backgroundColor: "transparent",
                          color: "var(--navy)",
                          border: "2px solid var(--navy)",
                        }
                  }
                >
                  Choose {plan.name}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
