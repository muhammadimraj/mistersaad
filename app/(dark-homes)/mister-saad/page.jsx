import HeroMisterSaad from "@/components/hero/HeroMisterSaad";
import AboutMisterSaad from "@/components/about/AboutMisterSaad";
import ServicesMisterSaad from "@/components/services/ServicesMisterSaad";
import MobileAppProcess from "@/components/process/MobileAppProcess";
import PortfolioMisterSaad from "@/components/portfolios/PortfolioMisterSaad";
import FactsMisterSaad from "@/components/facts/FactsMisterSaad";
import ToolsTechnology from "@/components/skills/ToolsTechnology";
import TestimonialsMisterSaad from "@/components/testimonials/TestimonialsMisterSaad";
import FAQ from "@/components/common/FAQ";
import Contact1 from "@/components/contact/Contact1";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

export const metadata = {
  title: "Expert Mobile App Developer Dubai | MisterSaad",
  description:
    "Professional Mobile App Developer in Dubai with 20+ years experience. Specializing in iOS & Android development using React Native, Flutter & Native technologies.",
};

export default function MisterSaadHome() {
  return (
    <>
      <Header1 />
      <HeroMisterSaad />
      <AboutMisterSaad />
      <ServicesMisterSaad />
      <MobileAppProcess />
      <PortfolioMisterSaad />
      <FactsMisterSaad />
      <ToolsTechnology />
      <TestimonialsMisterSaad />
      <FAQ />
      <Contact1 />
      <Footer1 />
    </>
  );
}

