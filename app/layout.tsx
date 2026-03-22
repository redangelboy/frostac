import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Frost Heating & Air | Expert HVAC Services — Lewisville, TX',
  description: 'Frost Heating & Air has served the Dallas-Fort Worth Metroplex since 1994. NATE-certified technicians, 24/7 emergency service, AC repair, heating installation, and more.',
  keywords: 'HVAC Lewisville TX, AC repair DFW, heating installation, Frost Heating Air, air conditioning, furnace repair',
  icons: {
    icon: [{ url: '/images/frost-logo.webp', type: 'image/webp' }],
    apple: '/images/frost-logo.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
