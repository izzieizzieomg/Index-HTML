import { Metadata } from "next"
import Link from "next/link"
import { Navigation, Footer } from "@/components/landing-sections"

export const metadata: Metadata = {
  title: "Links // I Z Z I E",
  description: "Connect with I Z Z I E on Spotify, Apple Music, Amazon Music, YouTube, and TikTok.",
}

export default function LinksPage() {
  const links = [
    { name: "SPOTIFY", href: "#", desc: "Stream music" },
    { name: "APPLE MUSIC", href: "#", desc: "Listen on Apple" },
    { name: "AMAZON MUSIC", href: "#", desc: "Listen on Amazon" },
    { name: "YOUTUBE", href: "#", desc: "Watch videos" },
    { name: "TIKTOK", href: "#", desc: "Follow for updates" },
  ]

  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-lg mx-auto">
          <header className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-[0.4em] text-foreground mb-4">
              LINKS
            </h1>
            <p className="text-xs tracking-[0.3em] text-muted-foreground">
              CONNECT <span className="mx-2 text-muted-foreground/30">&bull;</span> LISTEN <span className="mx-2 text-muted-foreground/30">&bull;</span> FOLLOW
            </p>
          </header>

          {/* Link Cards */}
          <nav aria-label="External links">
            <ul className="space-y-4 list-none">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block neon-border rounded-sm p-6 bg-gradient-to-r from-background to-secondary/10 group hover:scale-[1.02] transition-all duration-500 ease-out text-center"
                  >
                    <span className="text-sm tracking-[0.25em] text-foreground group-hover:text-primary transition-colors duration-500 block mb-1">
                      {link.name}
                    </span>
                    <span className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
                      {link.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to Home */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-xs tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              &larr; HOME
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
