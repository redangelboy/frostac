import { Snowflake, Wrench, Flame, Thermometer, ClipboardList, Wind, Home, AlertTriangle, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Snowflake,
    title: "AC Installation & Replacement",
    description: "Upgrade to a high-efficiency air conditioning system. We install all major brands with expert precision and minimal disruption.",
    color: "var(--blue)",
    bgColor: "rgba(33,150,243,0.08)",
  },
  {
    icon: Wrench,
    title: "AC Repair",
    description: "Fast, reliable AC repair services to get your home cool again. Same-day appointments available for urgent repairs.",
    color: "var(--orange)",
    bgColor: "rgba(232,99,10,0.08)",
  },
  {
    icon: Flame,
    title: "Heating Installation",
    description: "Furnaces, heat pumps, and more — installed by licensed specialists who ensure peak performance and long-lasting comfort.",
    color: "#E53E3E",
    bgColor: "rgba(229,62,62,0.08)",
  },
  {
    icon: Thermometer,
    title: "Heating Repair",
    description: "Don't shiver through a North Texas winter. Our certified techs diagnose and fix heating problems quickly and affordably.",
    color: "var(--orange)",
    bgColor: "rgba(232,99,10,0.08)",
  },
  {
    icon: ClipboardList,
    title: "HVAC Maintenance Plans",
    description: "Preventative maintenance keeps your system running efficiently year-round. Protect your investment and lower energy bills.",
    color: "var(--blue)",
    bgColor: "rgba(33,150,243,0.08)",
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    description: "Air purifiers, humidifiers, and duct cleaning services to ensure the air inside your home is clean, fresh, and healthy.",
    color: "#38A169",
    bgColor: "rgba(56,161,105,0.08)",
  },
  {
    icon: Home,
    title: "Insulation",
    description: "Proper insulation keeps your conditioned air in and outdoor temps out. We install premium Johns Manville and Owens Corning products.",
    color: "#D69E2E",
    bgColor: "rgba(214,158,46,0.08)",
  },
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Service",
    description: "HVAC emergencies don't keep business hours. We're on call 24 hours a day, 7 days a week, 365 days a year.",
    color: "#E53E3E",
    bgColor: "rgba(229,62,62,0.08)",
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 section-reveal" style={{ backgroundColor: "var(--light-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "rgba(232,99,10,0.1)", color: "var(--orange)" }}
          >
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-balance" style={{ color: "var(--text-dark)" }}>
            Complete HVAC Solutions
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            From routine maintenance to full system replacements, Frost Heating &amp; Air handles all your heating and cooling needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group flex flex-col p-6 rounded-2xl bg-white border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer section-reveal stagger-${Math.min(i + 1, 6)}`}
                style={{
                  borderColor: "var(--light-bg-2)",
                  boxShadow: "0 2px 8px rgba(10,37,64,0.06)",
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: service.bgColor, color: service.color }}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: "var(--text-dark)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-muted)" }}>
                  {service.description}
                </p>

                {/* Learn more link */}
                <div
                  className="flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2"
                  style={{ color: "var(--orange)" }}
                >
                  Learn More
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>

                {/* Bottom accent bar on hover */}
                <div
                  className="mt-4 h-0.5 rounded-full transition-all duration-300 w-0 group-hover:w-full"
                  style={{ backgroundColor: service.color }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
