import { Phone, CalendarCheck, ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[92vh] overflow-hidden"
      aria-label="Hero"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {/* Background image */}
      <img
        src="https://placehold.co/1920x1080?text=Modern+HVAC+technician+working+on+residential+air+conditioning+unit+in+suburban+home"
        alt="HVAC technician servicing an air conditioning unit"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.45) saturate(0.8)" }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(10,37,64,0.85) 0%, rgba(10,37,64,0.55) 60%, rgba(14,52,96,0.45) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, rgba(248,250,252,1), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in"
          style={{
            backgroundColor: "rgba(232,99,10,0.18)",
            border: "1px solid rgba(232,99,10,0.45)",
            color: "var(--orange-light)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--orange)", boxShadow: "0 0 8px var(--orange)" }}
          />
          Serving DFW Since 1994 — 30+ Years of Excellence
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6 animate-fade-in-up text-balance"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          Expert HVAC Services
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, var(--orange-light), var(--orange))" }}
          >
            for Your Home or Business
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ color: "rgba(255,255,255,0.82)", animationDelay: "0.15s" }}
        >
          Trusted NATE-certified technicians delivering energy-efficient heating &amp; cooling
          solutions across the Dallas-Fort Worth Metroplex.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <a
            href="#services"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, var(--orange), var(--orange-light))",
              boxShadow: "0 8px 32px rgba(232,99,10,0.45)",
            }}
          >
            <CalendarCheck size={20} />
            Schedule Service
          </a>
          <a
            href="tel:9728741001"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/15 w-full sm:w-auto justify-center"
            style={{
              border: "2px solid rgba(255,255,255,0.45)",
              backgroundColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Phone size={20} />
            Call Now: 972-874-1001
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-8 sm:gap-12 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          {[
            { value: "30+", label: "Years in Business" },
            { value: "24/7", label: "Emergency Service" },
            { value: "10K+", label: "Happy Customers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white leading-none" style={{ textShadow: "0 0 20px rgba(232,99,10,0.4)" }}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm mt-1 font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust-bar"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity hover:opacity-100 z-10"
        style={{ color: "rgba(255,255,255,0.5)", opacity: 0.7 }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}
