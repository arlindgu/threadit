
import HeroSectionSimpleCentred from "@/components/blocks/hero-sections/simple-centred";
import FeatureSectionSimple from "@/components/blocks/feature-sections/simple";
import PricingSectionCards from "@/components/blocks/pricing-sections/cards";
import Testimonial01 from "@/components/blocks/testimonial-01/testimonial-01"
import Features05Page from "@/components/blocks/features-05/features-05";

export default function Home() {
  return (
    <>
    <HeroSectionSimpleCentred />
    <Features05Page />
    <FeatureSectionSimple />
    <PricingSectionCards />
    <Testimonial01 />
    </>
  )
};
