import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'I Z Z I E // Official Node',
  description: 'I Z Z I E is an independent recording artist creating alternative pop, soft hip-pop, electronic music, visual art, livestream experiences, and creative digital projects.',
  keywords: ['I Z Z I E', 'IZZIE', 'i z z i e', 'Alternative Pop Artist', 'Independent Musician', 'Electronic Pop', 'Creative Technology', 'Digital Art', 'Audio Production', 'Music Livestreams', 'Original Music', 'Artist Portfolio', 'Journal Notes', 'Tennessee Artist'],
  authors: [{ name: 'I Z Z I E', url: 'https://izziesounds.com' }],
  creator: 'I Z Z I E',
  publisher: 'I Z Z I E',
  robots: 'index, follow',
  openGraph: {
    title: 'I Z Z I E // Official Node',
    type: 'website',
    images: [{ url: '/cover.jpg' }],
    url: 'https://izziesounds.com',
    siteName: 'I Z Z I E',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I Z Z I E // Official Node',
    description: 'Independent recording artist. Alternative pop, soft hip-pop, electronic music.',
    creator: '@izziesounds',
  },
  metadataBase: new URL('https://izziesounds.com'),
  alternates: {
    canonical: 'https://izziesounds.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF1493',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <head>
        {/* Artist Entity Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "@id": "https://izziesounds.com/#artist",
              "name": "I Z Z I E",
              "alternateName": "i z z i e",
              "url": "https://izziesounds.com",
              "mainEntityOfPage": "https://izziesounds.com",
              "description": "Independent recording artist creating alternative pop, soft hip-pop, electronic music, visual art, and creative digital projects.",
              "genre": ["Alternative Pop", "Soft Hip-Pop", "Electronic"],
              "foundingLocation": "Tennessee",
              "knowsAbout": ["Computer Programming", "Information Physics", "Sound Frequencies", "Audio Production", "Creative Technology", "Digital Art"],
              "sameAs": [
                "spotify-url",
                "apple-url",
                "amazon-url",
                "youtube-url",
                "tiktok-url"
              ]
            })
          }}
        />
        {/* Music Release Schema - Journal Notes */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicAlbum",
              "@id": "https://izziesounds.com/#journal-notes",
              "name": "Journal Notes",
              "byArtist": {
                "@type": "MusicGroup",
                "@id": "https://izziesounds.com/#artist",
                "name": "I Z Z I E"
              },
              "track": [
                { "@type": "MusicRecording", "name": "I Am The Table" },
                { "@type": "MusicRecording", "name": "What If" },
                { "@type": "MusicRecording", "name": "Let The Storm Unfold" },
                { "@type": "MusicRecording", "name": "Low Light Glow" }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
