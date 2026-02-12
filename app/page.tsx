import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Plans } from "@/components/plans"
import { About } from "@/components/about"
import { Supplements } from "@/components/supplements"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { SocialMedia } from "@/components/social-media"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WaveDivider } from "@/components/wave-divider"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Hero (dark) -> Plans (white) */}
        <WaveDivider topColor="#1a1a1a" bottomColor="hsl(0, 0%, 100%)" />

        <Plans />
        {/* Plans (white) -> About (red) */}
        <WaveDivider topColor="hsl(0, 0%, 100%)" bottomColor="hsl(0, 78%, 50%)" />

        <About />
        {/* About (red) -> Supplements (white) */}
        <WaveDivider topColor="hsl(0, 78%, 50%)" bottomColor="hsl(0, 0%, 100%)" />

        <Supplements />
        {/* Supplements (white) -> Testimonials (white) */}
        <div className="mx-auto max-w-3xl px-8" aria-hidden="true">
          <div className="h-px bg-border" />
        </div>

        <Testimonials />
        {/* Testimonials (white) -> Location (gray) */}
        <WaveDivider topColor="hsl(0, 0%, 100%)" bottomColor="hsl(0, 0%, 96%)" />

        <Location />
        {/* Location (gray) -> Social Media (dark) */}
        <WaveDivider topColor="hsl(0, 0%, 96%)" bottomColor="hsl(0, 0%, 7%)" />

        <SocialMedia />
        {/* Social Media (dark) -> Footer (red) */}
        <WaveDivider topColor="hsl(0, 0%, 7%)" bottomColor="hsl(0, 78%, 50%)" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
