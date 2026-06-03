"use client"

import Link from "next/link"
import Image from "next/image"

/* ==========================================================================
   I Z Z I E - Artist Knowledge Graph Website
   Luxury soft-pop futurism aesthetic
   ========================================================================== */

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-center h-20">
          <ul className="flex items-center gap-6 sm:gap-10 list-none">
            <li>
              <Link 
                href="/music" 
                className="text-xs sm:text-sm tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out"
              >
                MUSIC
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="text-muted-foreground/30">//</span>
            </li>
            <li>
              <Link 
                href="/art" 
                className="text-xs sm:text-sm tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out"
              >
                ART
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="text-muted-foreground/30">//</span>
            </li>
            <li>
              <Link 
                href="/vision" 
                className="text-xs sm:text-sm tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out"
              >
                VISION
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="text-muted-foreground/30">//</span>
            </li>
            <li>
              <Link 
                href="/links" 
                className="text-xs sm:text-sm tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out"
              >
                LINKS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export function HeroSection() {
  return (
    <section 
      aria-label="Hero" 
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artist_profile_bw_500x500-7z7786imjhLHhLGzEH5xqOfAkA8MzP.png"
        >
          <source 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_imagine-public_share-videos_71f8cc8b-7051-42b0-b6b0-a88f257118ea_hd-UU4lehym0AMc1klFMrInbxSv3TmOjK.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      {/* Artist Portrait */}
      <div className="relative z-10 mb-10">
        <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden neon-border p-1">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artist_profile_bw_500x500-7z7786imjhLHhLGzEH5xqOfAkA8MzP.png"
            alt="I Z Z I E - Artist Portrait"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        </div>
      </div>

      <div className="text-center relative z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-[0.4em] sm:tracking-[0.5em] text-foreground mb-6 transition-opacity duration-700">
          I Z Z I E
        </h1>
        <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground mb-2">
          INDEPENDENT ARTIST
        </p>
        <p className="text-xs tracking-[0.25em] text-muted-foreground/60 mb-8">
          ALTERNATIVE POP <span className="mx-2 text-muted-foreground/30">&bull;</span> ELECTRONIC <span className="mx-2 text-muted-foreground/30">&bull;</span> SOFT HIP-POP
        </p>
        <div 
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto" 
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

export function ConnectedNodesSection() {
  const platforms = [
    { name: "SPOTIFY", href: "#", label: "Listen on Spotify" },
    { name: "APPLE MUSIC", href: "#", label: "Listen on Apple Music" },
    { name: "AMAZON MUSIC", href: "#", label: "Listen on Amazon Music" },
    { name: "YOUTUBE", href: "#", label: "Watch on YouTube" },
    { name: "TIKTOK", href: "#", label: "Follow on TikTok" },
  ]

  return (
    <section aria-labelledby="connected-heading" className="py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="connected-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-8">
          CONNECTED NODES
        </h2>
        <nav aria-label="Streaming platforms">
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 list-none">
            {platforms.map((platform) => (
              <li key={platform.name} className="flex items-center">
                <Link 
                  href={platform.href}
                  className="text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground/70 hover:text-primary transition-colors duration-500 ease-out px-3 py-2 neon-border rounded-sm"
                  aria-label={platform.label}
                >
                  {platform.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export function LatestReleaseSection() {
  return (
    <section aria-labelledby="latest-heading" className="py-20 px-6 sm:px-12 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 id="latest-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-12 text-center">
          LATEST RELEASE
        </h2>
        
        <Link href="/journal-notes" className="block group">
          <article className="neon-border rounded-sm p-8 sm:p-12 bg-gradient-to-br from-background to-secondary/20 hover:scale-[1.01] transition-all duration-500 ease-out">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Album Art Placeholder */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 neon-border rounded-sm bg-gradient-to-br from-secondary/50 to-background flex items-center justify-center shrink-0">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-500">
                  COVER
                </span>
              </div>
              
              {/* Release Info */}
              <div className="text-center sm:text-left">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground/50 block mb-2">EP</span>
                <h3 className="text-2xl sm:text-3xl font-extralight tracking-[0.15em] text-foreground group-hover:text-primary transition-colors duration-500 mb-4">
                  JOURNAL NOTES
                </h3>
                <p className="text-xs tracking-[0.2em] text-muted-foreground/70 mb-6">
                  4 TRACKS
                </p>
                
                {/* Featured Track */}
                <div className="inline-block">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground/50 block mb-1">FEATURED</span>
                  <span className="text-sm tracking-[0.15em] text-foreground/80 group-hover:text-primary/80 transition-colors duration-500">
                    I Am The Table
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  )
}

export function ArtPreviewSection() {
  return (
    <section aria-labelledby="art-preview-heading" className="py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 id="art-preview-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-12 text-center">
          VISUAL WORLD
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stage Banner Image */}
          <div className="relative aspect-video rounded-sm overflow-hidden neon-border group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5064-OFFwyoD7aATdkkO8EaQNFPsyGSzmjE.jpeg"
              alt="IZZIE Live 2024 - Neon stage banner"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          
          {/* Video Portrait */}
          <div className="relative aspect-video rounded-sm overflow-hidden neon-border group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_users_bba4a3da-bd36-4825-96b6-7505b6845f07_generated_b739ffaa-4aef-4faf-9cf6-549303467049_generated_video-4gK3mmZXEtjZ8LQtxyJu12RDfcTXBm.mov" 
                type="video/quicktime" 
              />
              <source 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_users_bba4a3da-bd36-4825-96b6-7505b6845f07_generated_b739ffaa-4aef-4faf-9cf6-549303467049_generated_video-4gK3mmZXEtjZ8LQtxyJu12RDfcTXBm.mov" 
                type="video/mp4" 
              />
            </video>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/art"
            className="inline-block text-xs tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out px-6 py-3 neon-border rounded-sm"
          >
            VIEW ALL ART
          </Link>
        </div>
      </div>
    </section>
  )
}

export function IdentitySection() {
  return (
    <section id="identity" aria-labelledby="identity-heading" className="py-24 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="identity-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-8">
          ARTIST IDENTITY
        </h2>
        <p className="text-sm sm:text-base font-light leading-relaxed text-foreground/80 tracking-wide text-balance">
          I Z Z I E is an independent recording artist from Tennessee creating alternative pop, 
          soft hip-pop, electronic music, visual art, livestream experiences, 
          and creative digital projects.
        </p>
      </div>
    </section>
  )
}

export function VisionPreviewSection() {
  return (
    <section aria-labelledby="vision-preview-heading" className="py-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 id="vision-preview-heading" className="text-xs tracking-[0.4em] text-muted-foreground mb-12 text-center">
          VISION
        </h2>
        
        <blockquote className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm sm:text-base font-light leading-relaxed text-foreground/80 tracking-wide italic text-balance">
            Tune toward what expands. Joy over fear. Creation over control. Warmth over noise.
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground/70 tracking-wide italic">
            Following the light of the sun and the frequencies that bring life, connection, and possibility.
          </p>
        </blockquote>

        <div className="text-center">
          <Link 
            href="/vision"
            className="inline-block text-xs tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out px-6 py-3 neon-border rounded-sm"
          >
            EXPLORE VISION
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border/50" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="text-2xl sm:text-3xl font-extralight tracking-[0.5em] text-foreground hover:text-primary transition-colors duration-500">
            I Z Z I E
          </Link>
          
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 list-none">
              <li>
                <Link 
                  href="/music" 
                  className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out"
                >
                  MUSIC
                </Link>
              </li>
              <li>
                <Link 
                  href="/art" 
                  className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out"
                >
                  ART
                </Link>
              </li>
              <li>
                <Link 
                  href="/vision" 
                  className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out"
                >
                  VISION
                </Link>
              </li>
              <li>
                <Link 
                  href="/journal-notes" 
                  className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out"
                >
                  JOURNAL NOTES
                </Link>
              </li>
              <li>
                <Link 
                  href="/links" 
                  className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-500 ease-out"
                >
                  LINKS
                </Link>
              </li>
            </ul>
          </nav>

          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            <span aria-label="Copyright">&copy;</span> {new Date().getFullYear()} I Z Z I E
          </p>
        </div>
      </div>
    </footer>
  )
}
