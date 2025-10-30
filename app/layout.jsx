import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import Script from "next/script";
import PortfolioModal from "@/components/modals/PortfolioModal";
import BlogModal from "@/components/modals/BlogModal";
import { ContentProvider } from "@/contexts/ContentContext";
import ScrollTop from "@/components/common/ScrollTop";
import FixedFooterBar from "@/components/footers/FixedFooterBar";

import Sidebar from "@/components/common/Sidebar";
import GlobalEffectsProvider from "@/components/common/GlobalEffectsProvider";
import { ToastContainer } from "react-toastify";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
      <Script
          src="/assets/js/smooth.js"
          strategy="beforeInteractive"
        />
        <ContentProvider>
          {children}

          <div className="modals-wrapper">
            <PortfolioModal />
            <BlogModal />
            <Sidebar />
          </div>
          <ScrollTop />
          <FixedFooterBar />
          <ToastContainer
            position="bottom-right"
            // autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GlobalEffectsProvider />
        </ContentProvider>

        
      </body>
    </html>
  );
}
