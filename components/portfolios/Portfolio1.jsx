"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioItems2 } from "@/data/portfolio";
import { useContent } from "@/contexts/ContentContext";
export default function Portfolio1({
  parentClass = "latest-portfolio-area custom-column-grid tmp-section-gap",
}) {
  const { setCurrentPortfolio } = useContent();


  return (
    <section className={parentClass} id="portfolio">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">Projects</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Innovative Mobile Apps Across Industries
          </h2>

          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            I have provided effective projects to different industries and
            clients over the years. My apps are applied to various business
            models, including tourism, education, sports, and e-commerce. My
            skills in developing useful and user-friendly applications are
            demonstrated through projects such as Coffee Finder, Dubai Tourism,
            and Hamdan Sports. Through designing digital products that combine
            creativity and technical expertise, I have developed over 50 apps
            that are relevant in today’s competitive market. Every project has
            its requirements and an outcome that is a solution that brings
            important value to a certain degree.
          </p>
        </div>
        <div className="latest-portfolio-tabs-area">
          <div className="tab-content bg-blur-style-one" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-all"
              role="tabpanel"
              aria-labelledby="nav-all-tab"
              tabIndex={0}
            >
              <div className="row animation-action-3">
                {portfolioItems2.map((item, index) => (
                  <div className="col-lg-6 col-md-6 paralax-image" key={index}>
                    <div
                      className={`latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation active tmponhover tmp-fade-in animation-order-${
                        index + 1
                      }`}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter"
                      onClick={() => setCurrentPortfolio(item)}
                    >
                      <div className="portfoli-card-img">
                        <div className="img-box v2">
                          <a
                            className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                            href="#"
                          >
                            <Image
                              className="w-100"
                              alt="Thumbnail"
                              src={item.image}
                              width={1920}
                              height={1572}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className="portfolio-card-title">
                            <a href="#">{item.title}</a>
                          </h3>
                          <div className="tag-items">
                            <ul>
                              {item.tags.map((tag, tagIndex) => (
                                <li key={tagIndex}>
                                  <a href="#" className="tag-item">
                                    {tag}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <a
                          className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                          href="#"
                        >
                          <div className="icon-reverse-wrapper">
                            <span className="btn-text">View Details</span>
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
                              <i className="fa-sharp fa-regular fa-arrow-right" />
                            </span>
                            <span className="btn-icon">
                              <i className="fa-sharp fa-regular fa-arrow-right" />
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="tmp-light light-center" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
