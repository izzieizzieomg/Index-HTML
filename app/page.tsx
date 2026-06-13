import { 
  Navigation, 
  HeroSection, 
  ConnectedNodesSection,
  LatestReleaseSection,
  IdentitySection,
  VisionPreviewSection,
  Footer 
} from "@/components/landing-sections"

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ConnectedNodesSection />
        <LatestReleaseSection />
        <IdentitySection />
        <VisionPreviewSection />
      </main>
      <Footer />
    </>
  )
}
