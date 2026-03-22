const FACEBOOK_URL = "https://www.facebook.com/frostac?locale=en_US"
const YELP_URL = "https://www.yelp.com/biz/frost-brothers-heating-and-air-lewisville-2"

const items = [
  { label: "Facebook", href: FACEBOOK_URL, icon: "/social/facebook.svg" },
  { label: "Yelp", href: YELP_URL, icon: "/social/yelp.svg" },
] as const

/** Same row layout as phone/address lines: icon (left) + link text (right). */
export default function SocialLinksLuxury() {
  return (
    <>
      {items.map((item) => (
        <div key={item.label} style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ flexShrink: 0, width: 15, height: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG brand marks */}
            <img src={item.icon} alt="" width={15} height={15} style={{ width: 15, height: 15, objectFit: "contain", display: "block" }} />
          </span>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,.55)", fontSize: 14, textDecoration: "none" }}
          >
            {item.label}
          </a>
        </div>
      ))}
    </>
  )
}
