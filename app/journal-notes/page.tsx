import { Metadata } from "next"
import Link from "next/link"
import { Navigation, Footer } from "@/components/landing-sections"

export const metadata: Metadata = {
  title: "Journal Notes // I Z Z I E",
  description: "Journal Notes EP by I Z Z I E featuring I Am The Table, What If, Let The Storm Unfold, and Low Light Glow.",
}

export default function JournalNotesPage() {
  const tracks = [
    { title: "I Am The Table", featured: true },
    { title: "What If", featured: false },
    { title: "Let The Storm Unfold", featured: false },
    { title: "Low Light Glow", featured: false },
  ]

  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16 text-center">
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground/50 block mb-4">EP</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-[0.3em] text-foreground mb-4">
              JOURNAL NOTES
            </h1>
            <p className="text-xs tracking-[0.3em] text-muted-foreground">
              BY I Z Z I E
            </p>
          </header>

          {/* Album Art */}
          <section className="mb-16">
            <div className="aspect-square max-w-md mx-auto neon-border rounded-sm bg-gradient-to-br from-secondary/50 to-background flex items-center justify-center">
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40">
                ALBUM ART
              </span>
            </div>
          </section>

          {/* Track List */}
          <section aria-labelledby="tracks-heading" className="mb-16">
            <h2 id="tracks-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-8 text-center">
              TRACKS
            </h2>
            <ol className="space-y-4 list-none">
              {tracks.map((track, index) => (
                <li 
                  key={track.title}
                  className="neon-border rounded-sm p-6 bg-gradient-to-r from-background to-secondary/10 flex items-center justify-between group hover:scale-[1.01] transition-all duration-500 ease-out cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs tracking-[0.2em] text-muted-foreground/40 w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm sm:text-base tracking-[0.15em] text-foreground/80 group-hover:text-primary transition-colors duration-500">
                      {track.title}
                    </span>
                  </div>
                  {track.featured && (
                    <span className="text-[10px] tracking-[0.2em] text-primary/60">
                      FEATURED
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </section>

          {/* Listen Links */}
          <section aria-labelledby="listen-heading">
            <h2 id="listen-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-8 text-center">
              LISTEN
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["SPOTIFY", "APPLE MUSIC", "AMAZON MUSIC", "YOUTUBE"].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="text-[10px] tracking-[0.2em] text-muted-foreground/70 hover:text-primary transition-colors duration-500 ease-out px-5 py-3 neon-border rounded-sm"
                >
                  {platform}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
