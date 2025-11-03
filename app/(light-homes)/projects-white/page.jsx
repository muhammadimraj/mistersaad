import Portfolio1 from "@/components/portfolios/Portfolio1";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title: "Projects - Mobile App Developer Dubai | MisterSaad",
  description:
    "View my portfolio of mobile applications. Over 50+ successful projects across tourism, education, sports, and e-commerce industries using React Native, Flutter, and Native technologies.",
};

export default function ProjectsPageWhite() {
  return (
    <>
      <Header1 />
      <Portfolio1 />
      <Footer1 />
    </>
  );
}

