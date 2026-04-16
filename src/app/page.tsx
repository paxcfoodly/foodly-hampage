import {
  AllFeaturesGrid,
  CTA,
  FAQ,
  Features,
  FloatingPill,
  Footer,
  Hero,
  HeroVisual,
  LogoWall,
  Nav,
  Pricing,
  Problem,
  RevealObserver,
  ScrollProgress,
  Testimonials,
  Workflow,
} from '@/components/landing';

export default function Home() {
  return (
    <>
      <RevealObserver />
      <ScrollProgress />
      <Nav />
      <Hero />
      <HeroVisual />
      <LogoWall />
      <Problem />
      <Features />
      <Workflow />
      <AllFeaturesGrid />
      <Pricing />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingPill />
    </>
  );
}
