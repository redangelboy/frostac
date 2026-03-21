import { Phone, AlertTriangle } from "lucide-react"

export default function EmergencyBanner() {
  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--orange-dark) 0%, var(--orange) 50%, var(--orange-light) 100%)" }}
      aria-label="Emergency service"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-5 text-center md:text-left">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              <AlertTriangle size={26} color="white" strokeWidth={2} />
            </div>
            <div>
              <div className="text-white font-extrabold text-2xl sm:text-3xl leading-tight">
                HVAC Emergency?
              </div>
              <div className="text-white/85 text-base mt-1 font-medium">
                We&apos;re Available <strong className="text-white">24/7/365</strong> — No Extra Charge for Evenings or Weekends
              </div>
            </div>
          </div>

          {/* Right — CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href="tel:9728741001"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: "var(--white)",
                color: "var(--orange)",
                boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
              }}
            >
              <Phone size={20} />
              Call 972-874-1001
            </a>
            <div
              className="text-center text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              After 5pm:<br />
              <a href="tel:9728168116" className="font-bold text-white hover:underline">
                972-816-8116
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
