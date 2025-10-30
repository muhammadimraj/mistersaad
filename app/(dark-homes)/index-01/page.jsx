import About1 from "@/components/about/About1";
import Blogs1 from "@/components/blogs/Blogs1";
import IntroVideo from "@/components/common/IntroVideo";
import Contact1 from "@/components/contact/Contact1";
import Facts1 from "@/components/facts/Facts1";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Hero1 from "@/components/hero/Hero1";
import HowToHire from "@/components/hiring/HowToHire";
import MobileAppProcess from "@/components/process/MobileAppProcess";
import Portfolio1 from "@/components/portfolios/Portfolio1";
import Pricing1 from "@/components/pricing/Pricing1";
import Services1 from "@/components/services/Services1";
import Skills1 from "@/components/skills/Skills1";
import TestimonialsMisterSaad from "@/components/testimonials/TestimonialsMisterSaad";
import FAQ from "@/components/common/FAQ";
export const metadata = {
  title:
    "Home 01 || Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Hero1 />
      <Services1 />
      <About1 />
      <Facts1 />
      <TestimonialsMisterSaad />
      <Skills1 />
      <MobileAppProcess />
      <HowToHire />
      <Portfolio1 />
      <FAQ /> 
      <Contact1 />
      <Footer1 />
    </>
  );
}
