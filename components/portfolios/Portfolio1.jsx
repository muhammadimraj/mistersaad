"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems2 } from "@/data/portfolio";

export default function Portfolio1({
  parentClass = "latest-portfolio-area custom-column-grid tmp-section-gap",
}) {
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
                  <div className={`col-lg-6 col-md-6 paralax-image ${index % 2 === 0 ? 'pe-lg-0' : ''}`} key={index}>
                    <Link href={`/project/${item.id}`}>
                      <div
                        className={`latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation active tmponhover tmp-fade-in animation-order-${
                          index + 1
                        }`}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="portfoli-card-img">
                          <div className="img-box v2">
                            <div className="tmp-scroll-trigger tmp-zoom-in animation-order-1">
                              <Image
                                className="w-100"
                                alt="Thumbnail"
                                src={item.image}
                                width={1920}
                                height={1572}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-card-content-wrap">
                          <div className="content-left">
                            <h3 className="portfolio-card-title">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <div className="tmp-light light-center" />
                      </div>
                    </Link>
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
