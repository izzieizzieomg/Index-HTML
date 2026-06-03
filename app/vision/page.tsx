import { Metadata } from "next"
import { Navigation, Footer } from "@/components/landing-sections"

export const metadata: Metadata = {
  title: "Vision // I Z Z I E",
  description: "The creative vision and philosophy of I Z Z I E - tuning toward joy, creation, and positive frequencies.",
}

export default function VisionPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-20 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-[0.4em] text-foreground mb-4">
              VISION
            </h1>
            <p className="text-xs tracking-[0.3em] text-muted-foreground">
              PHILOSOPHY <span className="mx-2 text-muted-foreground/30">&bull;</span> FREQUENCY <span className="mx-2 text-muted-foreground/30">&bull;</span> CREATION
            </p>
          </header>

          {/* Manifesto */}
          <section aria-labelledby="manifesto-heading" className="mb-20">
            <h2 id="manifesto-heading" className="sr-only">Manifesto</h2>
            <blockquote className="text-center space-y-8">
              <p className="text-xl sm:text-2xl font-extralight leading-relaxed text-foreground tracking-wide italic text-balance">
                Tune toward what expands.
              </p>
              <p className="text-lg sm:text-xl font-light leading-relaxed text-foreground/80 tracking-wide text-balance">
                Joy over fear. Creation over control. Warmth over noise.
              </p>
              <p className="text-base font-light leading-relaxed text-muted-foreground/70 tracking-wide text-balance">
                Following the light of the sun and the frequencies that bring life, connection, and possibility.
              </p>
            </blockquote>
          </section>

          {/* Core Principles */}
          <section aria-labelledby="principles-heading" className="mb-20">
            <h2 id="principles-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-12 text-center">
              CORE FREQUENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "JOY", desc: "Over fear" },
                { title: "CREATION", desc: "Over control" },
                { title: "WARMTH", desc: "Over noise" },
                { title: "LIGHT", desc: "Over shadow" },
              ].map((item) => (
                <article 
                  key={item.title}
                  className="neon-border rounded-sm p-8 bg-gradient-to-br from-background to-secondary/20 text-center"
                >
                  <h3 className="text-lg tracking-[0.2em] text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs tracking-[0.15em] text-muted-foreground/60">{item.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Video Section */}
          <section aria-labelledby="video-heading">
            <h2 id="video-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-8 text-center">
              VISUAL
            </h2>
            <article className="aspect-video neon-border rounded-sm bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center group cursor-pointer hover:scale-[1.01] transition-all duration-500 ease-out">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors duration-500">
                  <div className="w-0 h-0 border-l-[10px] border-l-primary/40 border-y-[6px] border-y-transparent ml-1 group-hover:border-l-primary/70 transition-colors duration-500" />
                </div>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-500">
                  PLAY
                </span>
              </div>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
