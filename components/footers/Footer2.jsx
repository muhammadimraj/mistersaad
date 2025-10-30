"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Footer2({
  parentClass = "footer-area footer-style-one-wrapper bg-color-footer bg_images tmp-section-gap",
}) {
  return (
    <div className="footer-stars-animation-wrapper-footer">
      {/* Start Footer Area  */}
      <footer className={parentClass}>
        <div className="separator-animated-border border-top-footer animated-true" />
        <div className="separator-animated-border animated-true" />
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              <div className="col-lg-5 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link href={`/`} style={{ display: "inline-block" }}>
                      <Image
                        className="logo-dark"
                        alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                        src="/assets/images/logo/white-logo-reeni.png"
                        width={108}
                        height={30}
                      />
                      <Image
                        className="logo-white"
                        alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                        src="/assets/images/logo/dark-logo-virtuo.png"
                        width={108}
                        height={30}
                      />
                    </Link>
                  </div>
                  <p className="description">
                    <span>Get Ready</span> To Create Great
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    className="newsletter-form-1 mt--40"
                  >
                    <input type="email" placeholder="Email Adress" />
                    <span className="form-icon">
                      <i className="fa-regular fa-envelope" />
                    </span>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-link-animation">
                    <li>
                      <a href="#">About Me</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Contact Me</a>
                    </li>
                    <li>
                      <a href="#">Blog Post</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact</h5>
                  <ul className="ft-link tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="#">example@gmail.com</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      3891 Ranchview Dr. Richardson
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <a href="#">01245789321</a>
                    </li>
                  </ul>
                  <div className="social-link footer">
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-wrapper">
                <p className="copy-right-para tmp-link-animation">
                  © {new Date().getFullYear()}
                  <a
                    href="https://themeforest.net/user/inversweb/portfolio"
                    target="_blank"
                  >
                    InversWeb
                  </a>
                  | All Rights Reserved
                </p>
                <ul className="tmp-link-animation">
                  <li>
                    <a href="#">Trams &amp; Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Area  */}
      <div className="slider-bg-light">
        <Image
          className="blocksync-scroll-trigger fade_in animation-order-8"
          alt="Top Light Shape"
          src="/assets/images/banner/shape/light.svg"
          width={554}
          height={532}
        />
      </div>
      <div className="slider-bg-dot-shape">
        <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
          <div className="blocksync-stars" />
          <div className="blocksync-stars2" />
          <div className="blocksync-stars3" />
        </div>
      </div>
    </div>
  );
}
