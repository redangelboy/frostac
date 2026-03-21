import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Jennifer M.",
    location: "Lewisville, TX",
    date: "October 2024",
    rating: 5,
    text: "Frost Heating & Air has been taking care of our HVAC system for over 10 years. They replaced our whole system last summer and the energy savings have been incredible. The technicians are always professional and on time. I won't use anyone else!",
    service: "AC Replacement",
  },
  {
    name: "Marcus T.",
    location: "Frisco, TX",
    date: "August 2024",
    rating: 5,
    text: "Called at 10pm on a Sunday when our AC went out during a heat wave. A tech was at my door within 2 hours. Fixed the problem quickly and the price was completely fair. This is what real 24/7 emergency service looks like. Highly recommend!",
    service: "Emergency AC Repair",
  },
  {
    name: "Sandra & Bob K.",
    location: "Flower Mound, TX",
    date: "January 2025",
    rating: 5,
    text: "We used the Hearth financing option to replace our entire heating system. The process was seamless and we were funded within 2 days. Our new Trane unit is whisper-quiet and our gas bills dropped by 30%. Thank you Frost for making it so easy!",
    service: "Furnace Installation + Financing",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? "var(--orange)" : "none"}
          strokeWidth={i < rating ? 0 : 1.5}
          style={{ color: "var(--orange)" }}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 section-reveal" style={{ backgroundColor: "var(--light-bg)" }} aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "rgba(232,99,10,0.1)", color: "var(--orange)" }}
          >
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-balance" style={{ color: "var(--text-dark)" }}>
            What Our Customers Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            We&apos;ve built our reputation one satisfied customer at a time. Here&apos;s what DFW homeowners say about Frost Heating &amp; Air.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="var(--orange)" strokeWidth={0} />
              ))}
            </div>
            <span className="text-xl font-extrabold" style={{ color: "var(--text-dark)" }}>5.0</span>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Average Rating · 500+ Reviews</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`flex flex-col p-7 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl section-reveal stagger-${i + 1}`}
              style={{
                border: "1.5px solid var(--light-bg-2)",
                boxShadow: "0 4px 16px rgba(10,37,64,0.06)",
              }}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(232,99,10,0.08)", color: "var(--orange)" }}
              >
                <Quote size={18} strokeWidth={1.5} />
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p className="text-sm leading-relaxed my-4 flex-1 italic" style={{ color: "var(--text-muted)" }}>
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px mb-4" style={{ backgroundColor: "var(--light-bg-2)" }} />

              {/* Reviewer info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm" style={{ color: "var(--text-dark)" }}>
                    {review.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {review.location}
                  </div>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "rgba(33,150,243,0.08)",
                    color: "var(--blue)",
                  }}
                >
                  {review.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
