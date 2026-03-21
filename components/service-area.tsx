import { MapPin } from "lucide-react"

const counties = [
  { name: "Collin County", cities: "Plano, Frisco, McKinney, Allen" },
  { name: "Dallas County", cities: "Dallas, Irving, Garland, Mesquite" },
  { name: "Denton County", cities: "Denton, Lewisville, Flower Mound" },
  { name: "Tarrant County", cities: "Fort Worth, Arlington, Euless" },
  { name: "Wise County", cities: "Decatur, Bridgeport, Boyd" },
  { name: "Cooke County", cities: "Gainesville, Lindsay, Muenster" },
  { name: "Grayson County", cities: "Sherman, Denison, Durant area" },
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-24 section-reveal" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ backgroundColor: "rgba(33,150,243,0.1)", color: "var(--blue)" }}
            >
              <MapPin size={12} />
              Service Area
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 text-balance" style={{ color: "var(--text-dark)" }}>
              Proudly Serving{" "}
              <span style={{ color: "var(--navy)" }}>North Texas</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Based in Lewisville, TX, Frost Heating &amp; Air serves all of the
              Dallas-Fort Worth Metroplex and surrounding counties with fast,
              professional HVAC services.
            </p>

            {/* County cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {counties.map((county, i) => (
                <div
                  key={county.name}
                  className={`flex items-start gap-3 p-4 rounded-xl transition-all hover:shadow-md section-reveal stagger-${Math.min(i + 1, 6)}`}
                  style={{
                    backgroundColor: "var(--light-bg)",
                    border: "1.5px solid var(--light-bg-2)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "rgba(10,37,64,0.08)", color: "var(--navy)" }}
                  >
                    <MapPin size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "var(--text-dark)" }}>
                      {county.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {county.cities}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 flex items-center gap-3 px-5 py-4 rounded-2xl"
              style={{
                backgroundColor: "rgba(232,99,10,0.06)",
                border: "1.5px solid rgba(232,99,10,0.2)",
              }}
            >
              <MapPin size={20} style={{ color: "var(--orange)", flexShrink: 0 }} />
              <div>
                <div className="text-sm font-bold" style={{ color: "var(--text-dark)" }}>
                  Headquarters
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  320 Smith Street, Lewisville, Texas 75057
                </div>
              </div>
            </div>
          </div>

          {/* Right — Map visual */}
          <div className="relative section-reveal stagger-2">
            <div
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{ border: "1.5px solid var(--light-bg-2)" }}
            >
              <img
                src="https://placehold.co/700x520?text=Dallas+Fort+Worth+Metroplex+Texas+map+showing+service+counties+including+Collin+Dallas+Denton+Tarrant+counties"
                alt="Map of Dallas-Fort Worth Metroplex showing Frost Heating Air service counties"
                className="w-full object-cover"
              />
              {/* Map overlay with DFW label */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none rounded-3xl"
                style={{ background: "linear-gradient(135deg, rgba(10,37,64,0.08), rgba(10,37,64,0.04))" }}
              >
                <div
                  className="px-5 py-3 rounded-2xl text-center backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(10,37,64,0.82)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div className="text-white font-extrabold text-xl">DFW Metroplex</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                    7 Counties · Full Coverage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
