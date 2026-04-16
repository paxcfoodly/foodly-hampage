import {
  AllFeaturesGrid,
  CTA,
  Features,
  FloatingPill,
  Footer,
  Hero,
  Nav,
  Pricing,
  Problem,
  RevealObserver,
  Testimonials,
  Workflow,
} from '@/components/landing';

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <Workflow />
      <AllFeaturesGrid />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingPill />
    </>
  );
}
