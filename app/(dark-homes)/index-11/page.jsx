import About4 from "@/components/about/About4";
import Blogs4 from "@/components/blogs/Blogs4";
import IntroVideo from "@/components/common/IntroVideo";

import Contact6 from "@/components/contact/Contact6";

import Footer5 from "@/components/footers/Footer5";
import MobileMenu from "@/components/headers/HeaderMobile";
import Tabbar from "@/components/headers/Tabbar";

import Portfolios6 from "@/components/portfolios/Portfolios6";
import Profile2 from "@/components/profile/Profile2";
import Resume1 from "@/components/resume/Resume1";
import React from "react";
export const metadata = {
  title:
    "Home 11 || Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
};
export default function page() {
  return (
    <>
      <div className="index-ten">
        <MobileMenu />
        <div className="tmp-body-box-pattern" />

        <div className="cv-card-area cv-card-version-2">
          <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
            <div className="row row--25">
              <div className="col-xxl-3 col-lg-12">
                <Profile2 />
              </div>
              <div className="col-xxl-9 col-lg-12">
                <div className="tab-wrapper-overlay-to-top">
                  <Tabbar />
                  <div className="tmp-tab-content-area mt--60">
                    <div
                      className="tmp-all-tab-content card-bg-transparent tab-content no-shadow"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-Javascript"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        <About4 />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-Design"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        <Resume1 />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-Wordpress"
                        role="tabpanel"
                        aria-labelledby="v-pills-wordpress-tab"
                      >
                        <Portfolios6 />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tabs"
                      >
                        <Blogs4 />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-python"
                        role="tabpanel"
                        aria-labelledby="v-pills-python-tabs"
                      >
                        <Contact6 />
                      </div>
                    </div>
                  </div>
                  <Footer5 parentClass="tmp-footer-area footer-style-4 tmp-section-gap" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IntroVideo />
    </>
  );
}
