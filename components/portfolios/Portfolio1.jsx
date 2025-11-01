"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems2 } from "@/data/portfolio";
import { useContent } from "@/contexts/ContentContext";

export default function Portfolio1({
  parentClass = "latest-portfolio-area custom-column-grid tmp-section-gap",
}) {
  const { setCurrentPortfolio } = useContent();
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(portfolioItems2);

  // Mobile App Development categories
  const categories = [
    "All",
    "Android",
    "iOS",
    "Figma",
    "Firebase",
    "SQLite",
    "Flutter",
  ];

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(portfolioItems2);
    } else {
      const filtered = portfolioItems2.filter((item) =>
        item.categories?.includes(activeCategory)
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

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

        {/* Category Filter Buttons */}
        <div className="portfolio-filter-tabs mb--50">
          <div className="filter-button-group" style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            gap: '10px',
            marginBottom: '40px',
            overflowX: 'auto',
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`nav-link ${activeCategory === category ? 'active' : ''}`}
                onMouseEnter={(e) => {
                  if (activeCategory !== category) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
          <style jsx>{`
            .nav-link {
              padding: 10px 25px;
              border-radius: 10px;
              color: var(--color-heading);
              font-family: var(--font-primary);
              font-size: 16px;
              font-weight: 600;
              line-height: 27px;
              background: var(--color-gray-2);
              border: none;
              letter-spacing: .5px;
              position: relative;
              overflow: hidden;
              width: auto;
            }
            .nav-link.active::after {
              opacity: .5;
            }
            .nav-link::after {
              position: absolute;
              content: "";
              width: 40px;
              height: 40px;
              background: var(--color-primary);
              left: 50%;
              bottom: -20px;
              transform: translateX(-50%);
              border-radius: 100%;
              filter: blur(15px);
              opacity: 0;
              transition: .4s;
            }
            @media (max-width: 1024px) {
              .filter-button-group {
                flex-wrap: wrap !important;
                overflow-x: visible !important;
              }
            }
          `}</style>
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
                {filteredProjects.map((item, index) => (
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
                            onClick={(e) => e.preventDefault()}
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
                              <a href="#" onClick={(e) => e.preventDefault()}>{item.title}</a>
                            </h3>
                            <div className="tag-items">
                              <ul>
                                {item.tags.map((tag, tagIndex) => (
                                  <li key={tagIndex}>
                                    <a href="#" className="tag-item" onClick={(e) => e.preventDefault()}>
                                      {tag}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
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
