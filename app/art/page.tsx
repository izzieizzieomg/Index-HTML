import { Metadata } from "next"
import { Navigation, Footer } from "@/components/landing-sections"

export const metadata: Metadata = {
  title: "Art // I Z Z I E",
  description: "Visual art, digital creations, and imagery by I Z Z I E.",
}

export default function ArtPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-[0.4em] text-foreground mb-4">
              ART
            </h1>
            <p className="text-xs tracking-[0.3em] text-muted-foreground">
              VISUAL <span className="mx-2 text-muted-foreground/30">&bull;</span> DIGITAL <span className="mx-2 text-muted-foreground/30">&bull;</span> IMAGERY
            </p>
          </header>

          {/* Portrait Gallery */}
          <section aria-labelledby="gallery-heading" className="mb-16">
            <h2 id="gallery-heading" className="sr-only">Gallery</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <article 
                  key={item}
                  className="aspect-[3/4] neon-border rounded-sm bg-gradient-to-br from-background to-secondary/30 flex items-center justify-center group cursor-pointer hover:scale-[1.02] transition-all duration-500 ease-out"
                >
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-500">
                    IMAGERY
                  </span>
                </article>
              ))}
            </div>
          </section>

          {/* Landscape Gallery */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[1, 2].map((item) => (
                <article 
                  key={item}
                  className="aspect-video neon-border rounded-sm bg-gradient-to-br from-secondary/20 to-background flex items-center justify-center group cursor-pointer hover:scale-[1.02] transition-all duration-500 ease-out"
                >
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-500">
                    VISUALS
                  </span>
                </article>
              ))}
            </div>
          </section>

          {/* Wide Format */}
          <section>
            <article className="aspect-[21/9] neon-border rounded-sm bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center group cursor-pointer hover:scale-[1.01] transition-all duration-500 ease-out">
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-500">
                PANORAMIC
              </span>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
