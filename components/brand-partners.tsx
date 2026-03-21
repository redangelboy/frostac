const brands = [
  { name: "Trane", tagline: "It's Hard to Stop a Trane" },
  { name: "Carrier", tagline: "Turn to the Experts" },
  { name: "Bryant", tagline: "Perfect Air" },
  { name: "Lennox", tagline: "Innovation Never Felt So Good" },
  { name: "York", tagline: "Built for More" },
  { name: "Goodman", tagline: "Dependable Quality" },
  { name: "American Standard", tagline: "Always Comfortable" },
  { name: "Aprilaire", tagline: "Healthy Air Experts" },
  { name: "Johns Manville", tagline: "Premium Insulation" },
  { name: "Owens Corning", tagline: "Superior Insulation" },
]

export default function BrandPartners() {
  // Duplicate for seamless marquee loop
  const doubled = [...brands, ...brands]

  return (
    <section
      className="py-16 section-reveal overflow-hidden"
      style={{ backgroundColor: "var(--light-bg)" }}
      aria-label="Brand partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
            style={{ backgroundColor: "rgba(10,37,64,0.07)", color: "var(--navy)" }}
          >
            Trusted Brands
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: "var(--text-dark)" }}>
            We Work With All Major HVAC Brands
          </h2>
          <p className="text-base mt-2" style={{ color: "var(--text-muted)" }}>
            Authorized dealer and certified service provider for industry-leading manufacturers
          </p>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--light-bg), transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--light-bg), transparent)" }}
        />

        <div className="flex marquee-track" style={{ width: "max-content" }}>
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex flex-col items-center justify-center mx-4 px-8 py-5 rounded-2xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--white)",
                border: "1.5px solid var(--light-bg-2)",
                minWidth: "160px",
              }}
            >
              <div className="font-extrabold text-base text-center leading-tight" style={{ color: "var(--navy)" }}>
                {brand.name}
              </div>
              <div className="text-xs text-center mt-1" style={{ color: "var(--text-muted)" }}>
                {brand.tagline}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
