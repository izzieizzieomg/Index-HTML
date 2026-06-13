import { Metadata } from "next"
import Link from "next/link"
import { Navigation, Footer } from "@/components/landing-sections"

export const metadata: Metadata = {
  title: "Music // I Z Z I E",
  description: "Explore music by I Z Z I E - Alternative pop, soft hip-pop, and electronic releases including Journal Notes EP.",
}

export default function MusicPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-[0.4em] text-foreground mb-4">
              MUSIC
            </h1>
            <p className="text-xs tracking-[0.3em] text-muted-foreground">
              RELEASES <span className="mx-2 text-muted-foreground/30">&bull;</span> PROJECTS <span className="mx-2 text-muted-foreground/30">&bull;</span> TRACKS
            </p>
          </header>

          {/* Releases */}
          <section aria-labelledby="releases-heading" className="mb-20">
            <h2 id="releases-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-8">
              RELEASES
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Journal Notes */}
              <Link href="/journal-notes" className="group">
                <article className="aspect-square neon-border rounded-sm bg-gradient-to-br from-secondary/50 to-background flex flex-col items-center justify-center hover:scale-[1.02] transition-all duration-500 ease-out p-6">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground/50 mb-2">EP</span>
                  <span className="text-lg tracking-[0.2em] text-foreground/80 group-hover:text-primary transition-colors duration-500 mb-2 text-center">
                    JOURNAL NOTES
                  </span>
                  <span className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
                    4 TRACKS
                  </span>
                </article>
              </Link>

              {/* Heavy Saturation */}
              <article className="aspect-square neon-border rounded-sm bg-gradient-to-br from-secondary/50 to-background flex flex-col items-center justify-center group cursor-pointer hover:scale-[1.02] transition-all duration-500 ease-out p-6">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground/50 mb-2">PROJECT</span>
                <span className="text-lg tracking-[0.2em] text-foreground/80 group-hover:text-primary transition-colors duration-500 mb-2 text-center">
                  HEAVY SATURATION
                </span>
                <span className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
                  COMING
                </span>
              </article>

              {/* More */}
              <article className="aspect-square neon-border rounded-sm bg-gradient-to-br from-secondary/30 to-background flex items-center justify-center group cursor-pointer hover:scale-[1.02] transition-all duration-500 ease-out">
                <span className="text-xs tracking-[0.3em] text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-500">
                  MORE COMING
                </span>
              </article>
            </div>
          </section>

          {/* Listen On */}
          <section aria-labelledby="listen-heading">
            <h2 id="listen-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-8 text-center">
              LISTEN ON
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["SPOTIFY", "APPLE MUSIC", "AMAZON MUSIC", "YOUTUBE"].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="text-[10px] tracking-[0.2em] text-muted-foreground/70 hover:text-primary transition-colors duration-500 ease-out px-4 py-3 neon-border rounded-sm"
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
