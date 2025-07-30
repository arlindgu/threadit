
import HeroSectionSimpleCentred from "@/components/blocks/hero/simple-centred";
import FeatureSectionSimple from "@/components/blocks/services/simple";
import PricingSectionCards from "@/components/blocks/pricing/cards";
import Testimonial01 from "@/components/blocks/testimonial-01/testimonial-01"
import Features05Page from "@/components/blocks/trust/features-05";

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
