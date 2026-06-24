import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { FeaturesBento } from "@/components/sections/features-bento";
import { Workflow } from "@/components/sections/workflow";
import { Integrations } from "@/components/sections/integrations";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";
import { SiteFooter } from "@/components/sections/site-footer";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <SiteHeader />
      <Hero />
      <Reveal><LogoCloud /></Reveal>
      <Reveal><FeaturesBento /></Reveal>
      <Reveal><Workflow /></Reveal>
      <Reveal><Integrations /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><CTA /></Reveal>
      <SiteFooter />
    </main>
  );
}
