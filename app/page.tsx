"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  Phone, Menu, X, ChevronRight, Star, CheckCircle, Shield,
  Clock, Award, Zap, Wind, Settings, Home,
  Wrench, Leaf, MessageCircle, Send, Bot, User,
  MapPin, DollarSign, ArrowRight, BadgeCheck, Flame
} from "lucide-react"

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
/** Company mark — file lives in `images/frost-logo.webp`, served from `public/images`. */
const FROST_LOGO = "/images/frost-logo.webp"

const PHONE_MAIN = "972-874-1001"
const PHONE_AFTER = "972-816-8116"
const ADDRESS = "320 Smith Street, Lewisville, Texas 75057"

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Financing", href: "#financing" },
  { label: "Service Area", href: "#service-area" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#footer" },
]

const SERVICES = [
  {
    icon: Wind,
    title: "AC Installation & Replacement",
    desc: "Expert installation of energy-efficient cooling systems sized perfectly for your home or business.",
    color: "#2196F3",
  },
  {
    icon: Wrench,
    title: "AC Repair",
    desc: "Fast, reliable AC repairs for all makes and models. Most repairs completed same day.",
    color: "#E8630A",
  },
  {
    icon: Flame,
    title: "Heating Installation",
    desc: "Furnaces, heat pumps, and more — installed by NATE-certified specialists you can trust.",
    color: "#E8630A",
  },
  {
    icon: Settings,
    title: "Heating Repair",
    desc: "Don't suffer through a cold night. We diagnose and fix heating problems fast, 24/7.",
    color: "#2196F3",
  },
  {
    icon: Shield,
    title: "HVAC Maintenance Plans",
    desc: "Preventive tune-ups that keep your system running at peak efficiency and extend its lifespan.",
    color: "#2196F3",
  },
  {
    icon: Leaf,
    title: "Indoor Air Quality",
    desc: "Air purifiers, humidifiers, UV systems, and professional duct cleaning for healthier air.",
    color: "#2196F3",
  },
  {
    icon: Home,
    title: "Insulation",
    desc: "Proper insulation keeps your home comfortable year-round and reduces energy bills significantly.",
    color: "#E8630A",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    desc: "HVAC emergencies don't wait for business hours — and neither do we. Available every day, always.",
    color: "#E8630A",
  },
]

/** Logos in `public/images/companyLogos` (copied from `images/companyLogos`). */
const BRAND_LOGOS = [
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

const COUNTIES = [
  { name: "Collin County", cities: "Plano, McKinney, Frisco" },
  { name: "Dallas County", cities: "Dallas, Irving, Garland" },
  { name: "Denton County", cities: "Denton, Lewisville, Flower Mound" },
  { name: "Tarrant County", cities: "Fort Worth, Arlington, Mansfield" },
  { name: "Wise County", cities: "Decatur, Bridgeport, Alvord" },
  { name: "Cooke County", cities: "Gainesville, Muenster, Lindsay" },
  { name: "Grayson County", cities: "Sherman, Denison, Pottsboro" },
]

const PLANS = [
  {
    name: "Basic",
    price: "$149",
    period: "/year",
    featured: false,
    features: [
      "1 annual system tune-up",
      "Filter inspection & replacement",
      "Safety check & diagnostic",
      "Priority scheduling",
      "10% discount on repairs",
    ],
    cta: "Get Basic Plan",
  },
  {
    name: "Standard",
    price: "$249",
    period: "/year",
    featured: true,
    features: [
      "2 seasonal tune-ups (spring & fall)",
      "Filter replacement included",
      "Full system diagnostic",
      "Priority emergency service",
      "15% discount on repairs",
      "No overtime charges",
    ],
    cta: "Get Standard Plan",
  },
  {
    name: "Premium",
    price: "$399",
    period: "/year",
    featured: false,
    features: [
      "2 seasonal tune-ups + 1 inspection",
      "Filters replaced every visit",
      "Duct inspection included",
      "Priority same-day service",
      "20% discount on all repairs",
      "No overtime charges",
      "Free thermostat calibration",
    ],
    cta: "Get Premium Plan",
  },
]

const TESTIMONIALS = [
  {
    name: "Sandra M.",
    location: "Lewisville, TX",
    rating: 5,
    text: "Frost Heating & Air has been our go-to for 10 years. Fast, honest, and the techs always explain everything. Our new Trane system is amazing — energy bill dropped by 30%!",
    service: "AC Replacement",
  },
  {
    name: "Marcus T.",
    location: "Flower Mound, TX",
    rating: 5,
    text: "Called at 11pm on a Saturday when our AC went out during a heat wave. They had a tech at our door within an hour. Couldn't believe it. Truly 24/7 — highly recommend!",
    service: "Emergency Repair",
  },
  {
    name: "Jennifer R.",
    location: "Frisco, TX",
    rating: 5,
    text: "The maintenance plan is absolutely worth it. Caught a small issue before it became a big problem. The technician was professional, clean, and thorough. Five stars every time.",
    service: "Maintenance Plan",
  },
]

const BOT_RESPONSES: Record<string, string> = {
  emergency: "For HVAC emergencies, call us immediately at 972-874-1001 (after 5pm: 972-816-8116). We're available 24/7/365 — a technician will be dispatched as soon as possible!",
  financing: "We offer flexible financing through Hearth — loan amounts up to $250,000, no home equity required, no prepayment penalties, and funding in as little as 1-3 days. It won't affect your credit score to check your rate!",
  area: "We serve the entire Dallas-Fort Worth Metroplex including Collin, Dallas, Denton, Tarrant, Wise, Cooke, and Grayson Counties. Cities include Lewisville, Plano, Frisco, McKinney, Dallas, Fort Worth, and many more!",
  maintenance: "Our maintenance plans start at $149/year and include seasonal tune-ups, filter replacement, diagnostic checks, priority scheduling, and discounts on repairs. Preventive maintenance extends equipment life and reduces energy costs.",
  default: "Thanks for reaching out to Frost Heating & Air! We've been serving the DFW area since 1994. For the fastest response, give us a call at 972-874-1001. Our NATE-certified technicians are ready to help!",
}

/* ─────────────────────────────────────────
   UTILITY: scroll reveal hook
───────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed")
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function FrostHomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm the Frost Heating & Air assistant. How can I help you today? Ask about services, pricing, financing, or your service area!" },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function sendMessage() {
    const text = input.trim()
    if (!text) return
    setMessages((m) => [...m, { from: "user", text }])
    setInput("")
    const lower = text.toLowerCase()
    let response = BOT_RESPONSES.default
    if (lower.includes("emergenc") || lower.includes("urgent") || lower.includes("broke")) response = BOT_RESPONSES.emergency
    else if (lower.includes("financ") || lower.includes("loan") || lower.includes("pay")) response = BOT_RESPONSES.financing
    else if (lower.includes("area") || lower.includes("county") || lower.includes("serv")) response = BOT_RESPONSES.area
    else if (lower.includes("mainten") || lower.includes("plan") || lower.includes("tune")) response = BOT_RESPONSES.maintenance
    setTimeout(() => setMessages((m) => [...m, { from: "bot", text: response }]), 800)
  }

  return (
    <>
      <style>{`
        .reveal { opacity:0; transform:translateY(28px); transition:opacity .65s ease,transform .65s ease; }
        .reveal.revealed { opacity:1; transform:none; }
        .d1{transition-delay:.1s} .d2{transition-delay:.2s} .d3{transition-delay:.3s}
        .d4{transition-delay:.4s} .d5{transition-delay:.5s} .d6{transition-delay:.6s}

        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .marquee-track { animation: marquee 30s linear infinite; }
        .marquee-wrap:hover .marquee-track { animation-play-state:paused; }

        @keyframes pulseRing {
          0%,100%{ box-shadow:0 0 0 0 rgba(232,99,10,.55); }
          50%{ box-shadow:0 0 0 14px rgba(232,99,10,0); }
        }
        @keyframes pulseBlue {
          0%,100%{ box-shadow:0 0 0 0 rgba(33,150,243,.55); }
          50%{ box-shadow:0 0 0 14px rgba(33,150,243,0); }
        }
        .pulse-orange { animation: pulseRing 2s ease-in-out infinite; }
        .pulse-blue-btn { animation: pulseBlue 2.5s ease-in-out infinite; }

        .service-card:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(10,37,64,.13); }
        .service-card { transition: transform .3s ease, box-shadow .3s ease; }

        .plan-card:hover { transform:translateY(-4px); }
        .plan-card { transition:transform .3s ease, box-shadow .3s ease; }

        .nav-link::after { content:''; display:block; height:2px; background:#E8630A; transform:scaleX(0); transition:transform .25s ease; }
        .nav-link:hover::after { transform:scaleX(1); }

        @media(max-width:768px){ .mobile-hide{ display:none!important; } }
      `}</style>

      {/* ── HEADER ─────────────────────────────── */}
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? "#0A2540" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,.08)" : "none",
          transition: "all .3s ease",
        }}
      >
        {/* Top strip */}
        {!scrolled && (
          <div style={{ background: "#E8630A", padding: "6px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, color: "#fff" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={13} /> {ADDRESS}
            </span>
            <span className="mobile-hide" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Phone size={13} /> After 5pm: {PHONE_AFTER}</span>
              <span style={{ background: "rgba(255,255,255,.2)", padding: "2px 10px", borderRadius: 20, fontWeight: 600 }}>24/7 Emergency Available</span>
            </span>
          </div>
        )}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }} aria-label="Frost Heating & Air home">
            <Image
              src={FROST_LOGO}
              alt="Frost Heating & Air"
              width={220}
              height={48}
              priority
              className="h-11 w-auto max-w-[min(220px,52vw)] object-contain object-left"
            />
            <div className="mobile-hide" style={{ lineHeight: 1.15 }}>
              <div style={{ fontSize: 11, color: "#E8630A", fontWeight: 500, letterSpacing: 1 }}>EST. 1994 · LEWISVILLE, TX</div>
            </div>
          </a>

          {/* Nav */}
          <nav className="mobile-hide" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link"
                style={{ color: "rgba(255,255,255,.85)", textDecoration: "none", fontWeight: 500, fontSize: 14 }}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="mobile-hide" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href={`tel:${PHONE_MAIN}`} style={{ color: "#fff", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
              <Phone size={16} color="#E8630A" /> {PHONE_MAIN}
            </a>
            <a href="#contact"
              style={{ background: "#E8630A", color: "#fff", padding: "9px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}
              className="pulse-orange">
              Request Service
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "#fff", cursor: "pointer" }}
            className="menu-btn" aria-label="Toggle menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <style>{`.menu-btn{display:none!important} @media(max-width:768px){.menu-btn{display:flex!important}}`}</style>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "#0A2540", borderTop: "1px solid rgba(255,255,255,.1)", padding: "16px 24px 24px" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: "block", color: "#fff", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.06)", fontWeight: 500 }}>
                {l.label}
              </a>
            ))}
            <a href={`tel:${PHONE_MAIN}`}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#E8630A", color: "#fff", padding: "13px", borderRadius: 8, marginTop: 16, fontWeight: 700, textDecoration: "none" }}>
              <Phone size={18} /> Call {PHONE_MAIN}
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────── */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "#0A2540", overflow: "hidden" }}>
        <img
          src="https://placehold.co/1600x900?text=Modern+residential+HVAC+system+installation+technician+working+on+air+conditioner+unit"
          alt="HVAC technician working on a residential air conditioning system"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .18 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(10,37,64,.97) 0%,rgba(10,37,64,.8) 60%,rgba(14,52,96,.7) 100%)" }} />

        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle,rgba(33,150,243,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "2%", width: 300, height: 300, background: "radial-gradient(circle,rgba(232,99,10,.1) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,99,10,.15)", border: "1px solid rgba(232,99,10,.3)", borderRadius: 50, padding: "6px 16px", marginBottom: 24 }}>
            <BadgeCheck size={16} color="#E8630A" />
            <span style={{ color: "#E8630A", fontSize: 13, fontWeight: 600, letterSpacing: .5 }}>NATE-Certified · Licensed & Insured · Est. 1994</span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, maxWidth: 720, marginBottom: 20 }}>
            Expert HVAC Services for{" "}
            <span style={{ color: "#E8630A" }}>Your Home</span> or Business
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "rgba(255,255,255,.75)", maxWidth: 560, lineHeight: 1.7, marginBottom: 36 }}>
            Serving the Dallas-Fort Worth Metroplex for over 30 years. NATE-certified technicians, energy-efficient solutions, and 24/7 emergency response you can count on.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 56 }}>
            <a href="#services"
              style={{ background: "#E8630A", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              Schedule Service <ArrowRight size={18} />
            </a>
            <a href={`tel:${PHONE_MAIN}`}
              style={{ background: "rgba(255,255,255,.1)", border: "2px solid rgba(255,255,255,.3)", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, backdropFilter: "blur(8px)" }}>
              <Phone size={18} /> Call Now: {PHONE_MAIN}
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
            {[
              { num: "30+", label: "Years Experience" },
              { num: "10K+", label: "Satisfied Customers" },
              { num: "7", label: "Counties Served" },
              { num: "24/7", label: "Emergency Service" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#E8630A" }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────── */}
      <section style={{ background: "#0e3460", padding: "0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { icon: Award, label: "30+ Years Experience" },
            { icon: BadgeCheck, label: "NATE-Certified Techs" },
            { icon: Clock, label: "24/7/365 Emergency" },
            { icon: Shield, label: "Licensed & Insured" },
            { icon: CheckCircle, label: "Free Estimates" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "18px 28px", borderRight: "1px solid rgba(255,255,255,.08)" }}>
              <div style={{ width: 36, height: 36, background: "rgba(232,99,10,.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={18} color="#E8630A" />
              </div>
              <span style={{ color: "#fff", fontWeight: 600, fontSize: 14, whiteSpace: "nowrap" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────── */}
      <section id="services" style={{ background: "#F8FAFC", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ color: "#E8630A", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>What We Do</span>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.6rem)", fontWeight: 800, color: "#0A2540", marginTop: 8 }}>Comprehensive HVAC Services</h2>
            <p style={{ color: "#5A6A7A", fontSize: 16, maxWidth: 520, margin: "12px auto 0", lineHeight: 1.7 }}>
              From emergency repairs to full system replacements — our certified technicians handle it all.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 24 }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} className={`service-card reveal d${(i % 6) + 1}`}
                style={{ background: "#fff", borderRadius: 14, padding: "32px 28px", border: "1px solid rgba(10,37,64,.07)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.color }} />
                <div style={{ width: 52, height: 52, background: s.color === "#E8630A" ? "rgba(232,99,10,.1)" : "rgba(33,150,243,.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <s.icon size={26} color={s.color} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#0A2540", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "#5A6A7A", fontSize: 14, lineHeight: 1.65, marginBottom: 18 }}>{s.desc}</p>
                <a href="#contact" style={{ color: s.color, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                  Learn More <ChevronRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────── */}
      <section id="why-us" style={{ background: "#fff", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>
          {/* Image */}
          <div className="reveal" style={{ position: "relative" }}>
            <img
              src="https://placehold.co/600x520?text=Friendly+HVAC+technician+in+uniform+inspecting+air+conditioner+unit+at+residential+home"
              alt="Frost Heating and Air technician performing a professional HVAC inspection"
              style={{ width: "100%", borderRadius: 16, objectFit: "cover", height: 400 }}
            />
            <div style={{ position: "absolute", bottom: 24, left: 24, background: "#E8630A", color: "#fff", borderRadius: 12, padding: "14px 20px", boxShadow: "0 8px 32px rgba(232,99,10,.4)" }}>
              <div style={{ fontWeight: 800, fontSize: 28 }}>30+</div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Years Serving DFW</div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal d2">
            <span style={{ color: "#E8630A", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Why Choose Frost</span>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#0A2540", margin: "8px 0 12px" }}>
              The DFW Area's Most Trusted HVAC Partner
            </h2>
            <p style={{ color: "#5A6A7A", lineHeight: 1.7, marginBottom: 28 }}>
              Since 1994, families and businesses across the Dallas-Fort Worth Metroplex have relied on Frost Heating & Air for honest, expert service. Here's why they keep calling us back.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: BadgeCheck, title: "NATE-Certified Technicians", desc: "Our techs hold the industry's highest certification — your system is in expert hands." },
                { icon: Clock, title: "24/7/365 Emergency Availability", desc: "No extra charge for nights, weekends, or holidays. We're always here when you need us." },
                { icon: Zap, title: "Energy-Efficient Solutions", desc: "We recommend and install systems that lower your bills and reduce your carbon footprint." },
                { icon: Award, title: "All Major Brands Serviced", desc: "Trane, Carrier, Lennox, Goodman, York — we work with every major manufacturer." },
                { icon: DollarSign, title: "Flexible Financing Available", desc: "Through Hearth — up to $250K, no home equity required, funding in 1-3 days." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 38, height: 38, background: "rgba(33,150,243,.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <Icon size={18} color="#2196F3" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#0A2540", fontSize: 15 }}>{title}</div>
                    <div style={{ color: "#5A6A7A", fontSize: 14, lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI CHAT BANNER ──────────────────────── */}
      <section style={{ background: "linear-gradient(135deg,#061828 0%,#0A2540 50%,#0e3460 100%)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(33,150,243,.15)", border: "1px solid rgba(33,150,243,.3)", borderRadius: 50, padding: "6px 18px", marginBottom: 20 }}>
            <Zap size={14} color="#2196F3" />
            <span style={{ color: "#2196F3", fontSize: 13, fontWeight: 600, letterSpacing: .5 }}>NEW — AI-Powered Support</span>
          </div>
          <h2 className="reveal d2" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#fff", marginBottom: 14 }}>
            Get Answers 24/7 — Without Waiting on Hold
          </h2>
          <p className="reveal d3" style={{ color: "rgba(255,255,255,.7)", fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 580, margin: "0 auto 32px" }}>
            Our AI assistant can answer questions about pricing, services, financing, your service area, and more — instantly, any time of day or night.
          </p>
          <div className="reveal d4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 36 }}>
            {["What's the cost of a new AC?", "Do you serve my area?", "How does financing work?", "24/7 emergency?"].map((q) => (
              <button key={q} onClick={() => { setChatOpen(true) }}
                style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.8)", padding: "8px 16px", borderRadius: 50, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
                {q}
              </button>
            ))}
          </div>
          <button onClick={() => setChatOpen(true)} className="pulse-blue-btn reveal d5"
            style={{ background: "#2196F3", color: "#fff", padding: "14px 36px", borderRadius: 8, fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "inherit" }}>
            <MessageCircle size={20} /> Try Our AI Chat
          </button>
        </div>
      </section>

      {/* ── MAINTENANCE PLANS ───────────────────── */}
      <section id="maintenance" style={{ background: "#F8FAFC", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ color: "#E8630A", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Maintenance Plans</span>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.6rem)", fontWeight: 800, color: "#0A2540", marginTop: 8 }}>Protect Your Investment</h2>
            <p style={{ color: "#5A6A7A", fontSize: 16, maxWidth: 500, margin: "12px auto 0", lineHeight: 1.7 }}>
              Regular maintenance extends equipment life, improves efficiency, and prevents costly breakdowns.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {PLANS.map((plan, i) => (
              <div key={plan.name} className={`plan-card reveal d${i + 1}`}
                style={{
                  background: plan.featured ? "#0A2540" : "#fff",
                  border: plan.featured ? "2px solid #E8630A" : "1px solid rgba(10,37,64,.08)",
                  borderRadius: 16, padding: "36px 30px", position: "relative", overflow: "hidden",
                  boxShadow: plan.featured ? "0 24px 64px rgba(10,37,64,.25)" : "0 4px 24px rgba(10,37,64,.06)",
                }}>
                {plan.featured && (
                  <div style={{ position: "absolute", top: 16, right: 16, background: "#E8630A", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50, letterSpacing: .5 }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ color: plan.featured ? "#E8630A" : "#2196F3", fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
                  <span style={{ fontSize: 42, fontWeight: 800, color: plan.featured ? "#fff" : "#0A2540" }}>{plan.price}</span>
                  <span style={{ color: plan.featured ? "rgba(255,255,255,.5)" : "#5A6A7A", fontSize: 14 }}>{plan.period}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <CheckCircle size={16} color={plan.featured ? "#E8630A" : "#2196F3"} style={{ flexShrink: 0 }} />
                      <span style={{ color: plan.featured ? "rgba(255,255,255,.85)" : "#1A1A2E", fontSize: 14 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href={`tel:${PHONE_MAIN}`}
                  style={{
                    display: "block", textAlign: "center", padding: "12px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none",
                    background: plan.featured ? "#E8630A" : "transparent",
                    color: plan.featured ? "#fff" : "#0A2540",
                    border: plan.featured ? "none" : "2px solid #0A2540",
                  }}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────── */}
      <section id="service-area" style={{ background: "#fff", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56, alignItems: "center" }}>
          <div className="reveal">
            <span style={{ color: "#E8630A", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Where We Work</span>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#0A2540", margin: "8px 0 14px" }}>
              Serving the Dallas-Fort Worth Metroplex
            </h2>
            <p style={{ color: "#5A6A7A", lineHeight: 1.7, marginBottom: 28 }}>
              Our NATE-certified technicians cover the entire DFW area across 7 counties, providing the same high-quality service whether you're in Lewisville, Frisco, or Gainesville.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {COUNTIES.map((c, i) => (
                <div key={c.name} className={`reveal d${(i % 4) + 1}`}
                  style={{ background: "#F8FAFC", border: "1px solid rgba(10,37,64,.07)", borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <MapPin size={14} color="#E8630A" />
                    <span style={{ fontWeight: 700, fontSize: 14, color: "#0A2540" }}>{c.name}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#5A6A7A" }}>{c.cities}</div>
                </div>
              ))}
            </div>
            <a href={`tel:${PHONE_MAIN}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24, background: "#0A2540", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
              <Phone size={16} /> Check Your Area — Call Us
            </a>
          </div>
          <div className="reveal d2" style={{ position: "relative" }}>
            <img
              src="https://placehold.co/600x480?text=Dallas+Fort+Worth+Metroplex+aerial+map+view+showing+suburban+neighborhoods+and+highways"
              alt="Aerial view of the Dallas-Fort Worth Metroplex service area"
              style={{ width: "100%", borderRadius: 16, objectFit: "cover", height: 360 }}
            />
            <div style={{ position: "absolute", top: 20, left: 20, background: "#0A2540", color: "#fff", borderRadius: 10, padding: "10px 16px" }}>
              <div style={{ fontWeight: 700, fontSize: 22, color: "#E8630A" }}>7</div>
              <div style={{ fontSize: 12 }}>Counties Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND PARTNERS ──────────────────────── */}
      <section style={{ background: "#F8FAFC", padding: "56px 0", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span style={{ color: "#5A6A7A", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Authorized Partners & Brands We Service</span>
        </div>
        <div className="marquee-wrap" style={{ overflow: "hidden" }}>
          <div className="marquee-track" style={{ display: "flex", gap: 0, width: "max-content" }}>
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, i) => (
              <div key={`${brand.name}-${i}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 180, height: 80, margin: "0 8px", background: "#fff", border: "1px solid rgba(10,37,64,.08)", borderRadius: 10, padding: "12px 20px" }}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={48}
                  className="h-12 w-auto max-w-[148px] object-contain"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING ───────────────────────────── */}
      <section id="financing" style={{ background: "#0A2540", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56, alignItems: "center" }}>
          <div className="reveal">
            <span style={{ color: "#E8630A", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Flexible Financing</span>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#fff", margin: "8px 0 14px" }}>
              Don't Let Budget Stop Your Comfort
            </h2>
            <p style={{ color: "rgba(255,255,255,.7)", lineHeight: 1.7, marginBottom: 28 }}>
              Through our partnership with Hearth, we offer fast, flexible financing options so you can get the HVAC system you need — today.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              {[
                { val: "$250K", label: "Max Loan Amount" },
                { val: "1-3 Days", label: "Funding Speed" },
                { val: "0%", label: "Prepayment Penalty" },
                { val: "No Impact", label: "On Credit Score to Check" },
              ].map(({ val, label }) => (
                <div key={label} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 10, padding: "18px 16px" }}>
                  <div style={{ fontWeight: 800, fontSize: 22, color: "#E8630A" }}>{val}</div>
                  <div style={{ color: "rgba(255,255,255,.65)", fontSize: 13 }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact"
                style={{ background: "#E8630A", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                <DollarSign size={17} /> Check My Rate
              </a>
              <a href={`tel:${PHONE_MAIN}`}
                style={{ background: "transparent", border: "2px solid rgba(255,255,255,.25)", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                Talk to Us
              </a>
            </div>
          </div>
          <div className="reveal d2">
            <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "36px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 48, height: 48, background: "#E8630A", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <DollarSign size={26} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 20, color: "#fff" }}>Hearth Financing</div>
                  <div style={{ color: "rgba(255,255,255,.55)", fontSize: 13 }}>Frost's Trusted Finance Partner</div>
                </div>
              </div>
              {[
                "No home equity required",
                "Loan amounts up to $250,000",
                "Funding in as little as 1-3 days",
                "No prepayment penalties",
                "Won't affect credit score to check",
                "Simple online application",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                  <CheckCircle size={17} color="#E8630A" style={{ flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,.8)", fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────── */}
      <section style={{ background: "#F8FAFC", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ color: "#E8630A", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Customer Reviews</span>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.6rem)", fontWeight: 800, color: "#0A2540", marginTop: 8 }}>What Our Customers Say</h2>
            <p style={{ color: "#5A6A7A", fontSize: 16, marginTop: 10 }}>Rated 5 stars by hundreds of DFW families and businesses.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`reveal d${i + 1}`}
                style={{ background: "#fff", borderRadius: 14, padding: "32px 28px", border: "1px solid rgba(10,37,64,.07)", boxShadow: "0 4px 24px rgba(10,37,64,.05)" }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={18} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ color: "#1A1A2E", lineHeight: 1.7, fontSize: 15, marginBottom: 20, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "#0A2540" }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "#5A6A7A", display: "flex", alignItems: "center", gap: 4 }}>
                      <MapPin size={12} /> {t.location}
                    </div>
                  </div>
                  <span style={{ background: "rgba(33,150,243,.1)", color: "#2196F3", fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 50 }}>{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY BANNER ────────────────────── */}
      <section style={{ background: "linear-gradient(90deg,#C0520A,#E8630A)", padding: "40px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 52, height: 52, background: "rgba(255,255,255,.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Clock size={28} color="#fff" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "#fff" }}>HVAC Emergency? We're Available 24/7/365</div>
              <div style={{ color: "rgba(255,255,255,.85)", fontSize: 14 }}>No extra charges for nights, weekends, or holidays — just fast, expert help.</div>
            </div>
          </div>
          <a href={`tel:${PHONE_MAIN}`}
            style={{ background: "#fff", color: "#E8630A", padding: "14px 28px", borderRadius: 8, fontWeight: 800, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <Phone size={20} /> Call {PHONE_MAIN}
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer id="footer" style={{ background: "#061828", padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40, marginBottom: 48 }}>
            {/* Brand */}
            <div>
              <div style={{ marginBottom: 16 }}>
                <Image
                  src={FROST_LOGO}
                  alt="Frost Heating & Air"
                  width={200}
                  height={44}
                  className="h-10 w-auto max-w-[200px] object-contain object-left"
                />
                <div style={{ fontSize: 11, color: "#E8630A", marginTop: 8 }}>EST. 1994</div>
              </div>
              <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                Trusted HVAC services for the Dallas-Fort Worth Metroplex since 1994.
              </p>
              <a href={`tel:${PHONE_MAIN}`} style={{ color: "#fff", fontWeight: 700, fontSize: 17, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={16} color="#E8630A" /> {PHONE_MAIN}
              </a>
            </div>

            {/* Services */}
            <div>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: 15, marginBottom: 16 }}>Services</div>
              {["AC Installation", "AC Repair", "Heating Installation", "Heating Repair", "Maintenance Plans", "Indoor Air Quality", "Insulation"].map((s) => (
                <a key={s} href="#services" style={{ display: "block", color: "rgba(255,255,255,.5)", fontSize: 14, marginBottom: 8, textDecoration: "none" }}>{s}</a>
              ))}
            </div>

            {/* Company */}
            <div>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: 15, marginBottom: 16 }}>Company</div>
              {["About Us", "Service Area", "Maintenance Plans", "Financing", "Emergency Service", "Contact Us"].map((s) => (
                <a key={s} href="#why-us" style={{ display: "block", color: "rgba(255,255,255,.5)", fontSize: 14, marginBottom: 8, textDecoration: "none" }}>{s}</a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: 15, marginBottom: 16 }}>Contact</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <MapPin size={15} color="#E8630A" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "rgba(255,255,255,.55)", fontSize: 14, lineHeight: 1.5 }}>{ADDRESS}</span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Phone size={15} color="#E8630A" />
                  <a href={`tel:${PHONE_MAIN}`} style={{ color: "rgba(255,255,255,.55)", fontSize: 14, textDecoration: "none" }}>{PHONE_MAIN}</a>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Phone size={15} color="#E8630A" />
                  <span style={{ color: "rgba(255,255,255,.55)", fontSize: 14 }}>After 5pm: {PHONE_AFTER}</span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 4 }}>
                  <Clock size={15} color="#2196F3" />
                  <span style={{ color: "#2196F3", fontSize: 14, fontWeight: 600 }}>24/7/365 Emergency Available</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <span style={{ color: "rgba(255,255,255,.35)", fontSize: 13 }}>
              © {new Date().getFullYear()} Frost Heating & Air. All rights reserved. Licensed HVAC Contractor — Texas.
            </span>
            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
                <a key={l} href="#" style={{ color: "rgba(255,255,255,.35)", fontSize: 13, textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING CALL (mobile) ───────────────── */}
      <a href={`tel:${PHONE_MAIN}`}
        style={{ position: "fixed", bottom: 24, left: 20, zIndex: 900, background: "#E8630A", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 24px rgba(232,99,10,.5)", textDecoration: "none" }}
        className="pulse-orange mobile-float"
        aria-label="Call Frost Heating and Air">
        <Phone size={24} />
        <style>{`@media(min-width:769px){.mobile-float{display:none!important}}`}</style>
      </a>

      {/* ── FLOATING AI CHAT BUTTON ─────────────── */}
      <button onClick={() => setChatOpen(true)}
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 900, background: "#0A2540", color: "#fff", borderRadius: 50, padding: "12px 20px", display: "flex", alignItems: "center", gap: 10, border: "2px solid rgba(33,150,243,.4)", cursor: "pointer", fontFamily: "inherit", fontWeight: 700, fontSize: 14, boxShadow: "0 8px 32px rgba(10,37,64,.4)" }}
        className="pulse-blue-btn"
        aria-label="Open AI Chat">
        <MessageCircle size={20} color="#2196F3" />
        <span>AI Support</span>
      </button>

      {/* ── AI CHAT MODAL ───────────────────────── */}
      {chatOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "0 24px 96px" }}>
          <div style={{ width: "100%", maxWidth: 380, background: "#fff", borderRadius: 16, boxShadow: "0 32px 80px rgba(10,37,64,.25)", overflow: "hidden", display: "flex", flexDirection: "column", maxHeight: "70vh", border: "1px solid rgba(10,37,64,.1)" }}>
            {/* Header */}
            <div style={{ background: "#0A2540", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, overflow: "hidden", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 4, flexShrink: 0 }}>
                  <Image src={FROST_LOGO} alt="" width={72} height={32} className="h-8 w-auto max-w-[72px] object-contain" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>Frost AI Assistant</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%" }} />
                    <span style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>Online 24/7</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,.6)", cursor: "pointer" }}>
                <X size={22} />
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 16px 8px", display: "flex", flexDirection: "column", gap: 12, background: "#F8FAFC" }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-end", flexDirection: msg.from === "user" ? "row-reverse" : "row" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: msg.from === "bot" ? "#0A2540" : "#E8630A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {msg.from === "bot" ? <Bot size={15} color="#fff" /> : <User size={15} color="#fff" />}
                  </div>
                  <div style={{ maxWidth: "75%", background: msg.from === "bot" ? "#fff" : "#E8630A", color: msg.from === "bot" ? "#1A1A2E" : "#fff", padding: "10px 14px", borderRadius: msg.from === "bot" ? "12px 12px 12px 2px" : "12px 12px 2px 12px", fontSize: 14, lineHeight: 1.55, boxShadow: "0 2px 8px rgba(0,0,0,.07)" }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            <div style={{ padding: "8px 12px", background: "#F8FAFC", display: "flex", gap: 6, flexWrap: "wrap", borderTop: "1px solid rgba(10,37,64,.06)" }}>
              {["Emergency?", "Financing?", "Service area?", "Maintenance?"].map((q) => (
                <button key={q} onClick={() => { setInput(q); }}
                  style={{ background: "#fff", border: "1px solid rgba(10,37,64,.15)", color: "#0A2540", padding: "4px 10px", borderRadius: 50, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div style={{ padding: "12px 14px", borderTop: "1px solid rgba(10,37,64,.08)", display: "flex", gap: 8, background: "#fff" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about services, pricing..."
                style={{ flex: 1, border: "1px solid rgba(10,37,64,.15)", borderRadius: 8, padding: "9px 12px", fontSize: 14, outline: "none", fontFamily: "inherit", color: "#1A1A2E", background: "#F8FAFC" }}
              />
              <button onClick={sendMessage}
                style={{ background: "#E8630A", border: "none", borderRadius: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                <Send size={17} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
