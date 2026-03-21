import { CheckCircle2, ArrowRight } from "lucide-react"

const benefits = [
  {
    title: "NATE-Certified Expert Technicians",
    desc: "Our team holds North American Technician Excellence certification — the highest standard in the HVAC industry.",
  },
  {
    title: "30 Years of Proven Experience",
    desc: "Founded in 1994, we've built a reputation for reliability, honesty, and quality across thousands of DFW homes.",
  },
  {
    title: "All Major Brands Serviced",
    desc: "We work with Trane, Carrier, Lennox, Goodman, American Standard, York, Bryant, and more.",
  },
  {
    title: "Energy-Efficient Solutions",
    desc: "We help you reduce energy costs with the latest high-efficiency equipment and smart thermostat integration.",
  },
  {
    title: "Flexible Financing Available",
    desc: "Through our Hearth financing partner — loans up to $250K, no home equity needed, funded in 1-3 days.",
  },
  {
    title: "Friendly & Professional Service",
    desc: "Our technicians arrive on time, treat your home with respect, and explain every step of the process.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 section-reveal" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <div className="relative section-reveal">
            <div
              className="absolute -top-6 -left-6 w-64 h-64 rounded-3xl opacity-10"
              style={{ background: "radial-gradient(circle, var(--orange), transparent)" }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/720x540?text=Friendly+NATE+certified+HVAC+technician+servicing+home+heating+system+smiling+at+customer"
                alt="Friendly NATE-certified HVAC technician with a homeowner"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-6 left-6 right-6 flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(10,37,64,0.88)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 font-extrabold text-white text-lg"
                  style={{ background: "linear-gradient(135deg, var(--orange), var(--orange-light))" }}
                >
                  A+
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Top-Rated HVAC Company</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Serving DFW Since 1994 · NATE Certified
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-xl"
              style={{
                backgroundColor: "var(--white)",
                border: "1.5px solid var(--light-bg-2)",
                boxShadow: "0 12px 40px rgba(10,37,64,0.12)",
              }}
            >
              <div className="text-4xl font-extrabold leading-none" style={{ color: "var(--navy)" }}>30+</div>
              <div className="text-sm font-medium mt-0.5" style={{ color: "var(--text-muted)" }}>Years Experience</div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="section-reveal stagger-2">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ backgroundColor: "rgba(232,99,10,0.1)", color: "var(--orange)" }}
            >
              Why Choose Frost
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 text-balance leading-tight" style={{ color: "var(--text-dark)" }}>
              The DFW HVAC Company{" "}
              <span style={{ color: "var(--orange)" }}>You Can Trust</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Since 1994, Frost Heating &amp; Air has been the go-to HVAC specialist for homeowners and
              businesses across the Dallas-Fort Worth area. Here&apos;s why our customers keep coming back.
            </p>

            {/* Benefits list */}
            <div className="flex flex-col gap-4 mb-8">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={20} style={{ color: "var(--orange)" }} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-0.5" style={{ color: "var(--text-dark)" }}>
                      {b.title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#services"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, var(--orange), var(--orange-light))",
                  boxShadow: "0 4px 16px rgba(232,99,10,0.3)",
                }}
              >
                Schedule Service
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:9728741001"
                className="flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-opacity-10"
                style={{
                  color: "var(--navy)",
                  border: "2px solid var(--navy)",
                }}
              >
                Call 972-874-1001
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
