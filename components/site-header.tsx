"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"

const FROST_LOGO = "/images/frost-logo.webp"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#why-us" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Financing", href: "#financing" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#footer" },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top announcement bar */}
      <div
        className="hidden md:flex items-center justify-between px-8 py-2 text-sm font-medium"
        style={{ backgroundColor: "var(--navy-dark)", color: "rgba(255,255,255,0.85)" }}
      >
        <span>Serving the Dallas-Fort Worth Metroplex since 1994</span>
        <div className="flex items-center gap-6">
          <a
            href="tel:9728741001"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            style={{ color: "var(--orange)" }}
          >
            <Phone size={13} />
            <span>972-874-1001</span>
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
          <span>After 5pm: <a href="tel:9728168116" className="hover:text-white transition-colors" style={{ color: "var(--orange)" }}>972-816-8116</a></span>
        </div>
      </div>

      {/* Main header */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10,37,64,0.97)" : "var(--navy)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group" aria-label="Frost Heating & Air home">
              <Image
                src={FROST_LOGO}
                alt="Frost Heating & Air"
                width={200}
                height={44}
                priority
                className="h-10 sm:h-11 w-auto max-w-[min(200px,48vw)] object-contain object-left transition-transform group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "white" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA area */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:9728741001"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/10"
                style={{ color: "var(--orange)" }}
              >
                <Phone size={15} />
                <span>972-874-1001</span>
              </a>
              <a
                href="#services"
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, var(--orange), var(--orange-light))",
                  boxShadow: "0 4px 14px rgba(232,99,10,0.35)",
                }}
              >
                Request Service
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-white transition-colors hover:bg-white/10"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? "420px" : "0",
            borderTop: menuOpen ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}
        >
          <nav className="px-4 pb-5 pt-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <a
                href="tel:9728741001"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
                style={{ color: "var(--orange)", border: "1.5px solid var(--orange)" }}
              >
                <Phone size={15} />
                Call: 972-874-1001
              </a>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center py-3 rounded-xl text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, var(--orange), var(--orange-light))" }}
              >
                Request Service
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
