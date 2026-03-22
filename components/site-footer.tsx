import Image from "next/image"
import { Phone, MapPin, Mail } from "lucide-react"
import SocialLinksLuxury from "@/components/social-links-luxury"

const FROST_LOGO = "/images/frost-logo.webp"

const footerLinks = {
  Services: [
    "AC Installation",
    "AC Repair",
    "Heating Installation",
    "Heating Repair",
    "HVAC Maintenance",
    "Indoor Air Quality",
    "Insulation",
    "Emergency Service",
  ],
  Company: [
    "About Us",
    "Why Choose Us",
    "Our Team",
    "Financing",
    "Maintenance Plans",
    "Service Area",
    "Contact Us",
    "Careers",
  ],
}

export default function SiteFooter() {
  return (
    <footer id="footer" style={{ backgroundColor: "var(--navy-dark)" }} aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-5">
              <Image
                src={FROST_LOGO}
                alt="Frost Heating & Air"
                width={200}
                height={44}
                className="h-10 w-auto max-w-[200px] object-contain object-left"
              />
              <div className="text-xs font-medium tracking-widest uppercase mt-2" style={{ color: "var(--orange)" }}>
                Est. 1994
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              Trusted HVAC specialists serving the Dallas-Fort Worth Metroplex since 1994.
              NATE-certified technicians, 24/7 emergency service, and a commitment to your comfort.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:9728741001"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                style={{ color: "var(--orange)" }}
              >
                <Phone size={14} />
                972-874-1001
              </a>
              <a
                href="tel:9728168116"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <Phone size={14} />
                After 5pm: 972-816-8116
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                320 Smith Street, Lewisville, Texas 75057
              </div>
              <a
                href="mailto:info@frostac.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <Mail size={14} />
                info@frostac.com
              </a>
              <SocialLinksLuxury />
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-5"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Hours column */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Hours &amp; Service
            </h3>
            <div className="flex flex-col gap-2 mb-5">
              {[
                { day: "Monday - Friday", hours: "8:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
                { day: "Sunday", hours: "By Appointment" },
              ].map(({ day, hours }) => (
                <div key={day}>
                  <div className="text-xs font-medium mb-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {day}
                  </div>
                  <div className="text-sm text-white font-medium">{hours}</div>
                </div>
              ))}
            </div>
            <div
              className="flex items-center gap-2 px-4 py-3 rounded-xl"
              style={{
                backgroundColor: "rgba(232,99,10,0.15)",
                border: "1px solid rgba(232,99,10,0.3)",
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--orange)", boxShadow: "0 0 8px var(--orange)" }}
              />
              <div>
                <div className="text-xs font-bold text-white">24/7 Emergency</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Always available for emergencies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.4)" }}>
            &copy; {new Date().getFullYear()} Frost Heating &amp; Air. All rights reserved.
            Licensed &amp; Insured · NATE Certified
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
