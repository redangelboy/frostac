import Image from "next/image"

/** Logos served from `public/images/companyLogos` (source files live in `images/companyLogos`). */
const brands = [
  { name: "Owens Corning", logo: "/images/companyLogos/owens-corning.webp" },
  { name: "Trane", logo: "/images/companyLogos/trane.webp" },
  { name: "Carrier", logo: "/images/companyLogos/carrier.webp" },
  { name: "Bryant", logo: "/images/companyLogos/bryant.webp" },
  { name: "Lennox", logo: "/images/companyLogos/lennox.webp" },
  { name: "York", logo: "/images/companyLogos/york.webp" },
  { name: "Goodman", logo: "/images/companyLogos/goodman.webp" },
  { name: "American Standard", logo: "/images/companyLogos/american-standard.webp" },
  { name: "Johns Manville", logo: "/images/companyLogos/johns-manville.webp" },
]

export default function BrandPartners() {
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

      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--light-bg), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--light-bg), transparent)" }}
        />

        <div className="flex marquee-track" style={{ width: "max-content" }}>
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center mx-4 px-6 py-6 rounded-2xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--white)",
                border: "1.5px solid var(--light-bg-2)",
                minWidth: "168px",
                minHeight: "88px",
              }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={160}
                height={56}
                className="h-12 w-auto max-w-[148px] object-contain object-center"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
