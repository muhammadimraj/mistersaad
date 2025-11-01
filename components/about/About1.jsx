import React from "react";
import Image from "next/image";
export default function About1() {
  return (
    <section className="about-us-area tmp-section-gapBottom pt--60 pb--60" id="about">
      <div className="container">
        {/* tmp About Me Start */}
        <section className="about-us-area">
          <div className="container">
            <div className="row align-items-center animation-action-3">
              <div className="col-lg-6 pr--50 pr_lg--10 pr_md--10 pr_sm--10">
                <div className="about-us-left-content-wrap paralax-image">
                  <div className="about-thumbnail-large-style-two about-us-card tmponhover single-animation active about-image-offset">
                    <Image
                      alt="about"
                      src="/assets/saad-images/saad.png"
                      width={940}
                      height={500}
                    />
                    <div className="tmp-light light-center" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-us-right-content-wrap">
                  <div className="section-head text-align-left mb--50">
                    <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle theme-gradient">About Me</span>
                    </div>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                      Expert Mobile App Developer Dubai
                    </h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      Hi, I am Muhammad Saad, a seasoned mobile app developer in Dubai. 
                      I have been assisting companies in Dubai, Abu Dhabi, and worldwide 
                      for over 20 years. I am interested in developing and enhancing mobile 
                      apps for both iOS and Android platforms. Developing apps based on the 
                      business objectives and user requirements, I provide them using React 
                      Native, Flutter, or Native technologies.
                    </p>
                  </div>
                  <div className="about-us-section-card row g-5">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                        <div className="card-head with-flex">
                          <div className="logo-img">
                            <Image
                              alt="logo"
                              src="/assets/images/about/logo-1.svg"
                              width={24}
                              height={24}
                            />
                          </div>
                          <h3 className="card-title">App Developer</h3>
                        </div>
                        <p className="card-para">
                          Complete development of high-performing iOS applications that are customized to suit Apple users.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                        <div className="card-head with-flex">
                          <div className="logo-img">
                            <Image
                              alt="logo"
                              src="/assets/images/about/logo-2.svg"
                              width={24}
                              height={24}
                            />
                          </div>
                          <h3 className="card-title">Location Tracking</h3>
                        </div>
                        <p className="card-para">
                          Smart tracking built into apps to track transport, delivery, and logistics.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                    <a
                      className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                      href="#"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Read More About Me</span>
                        <div className="btn-hack" />
                        <Image
                          alt=""
                          className="btn-bg"
                          src="/assets/images/button/btg-bg.svg"
                          width={195}
                          height={56}
                        />
                        <Image
                          alt=""
                          className="btn-bg-hover"
                          src="/assets/images/button/btg-bg-2.svg"
                          width={193}
                          height={62}
                        />
                        <span className="btn-icon">
                          <i className="fa-regular fa-arrow-down" />
                        </span>
                        <span className="btn-icon">
                          <i className="fa-regular fa-arrow-down" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* tmp About Me end */}
      </div>
    </section>
  );
}
