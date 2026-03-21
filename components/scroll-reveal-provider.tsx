"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal()
  return <>{children}</>
}
