"use client";
import React from "react";
import Image from "next/image";
import { misterSaadProjects } from "@/data/portfolio";

export default function PortfolioMisterSaad() {
  return (
    <div className="tmp-portfolio-area tmp-section-gap" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb--50">
              <div className="section-sub-title center-title">
                <span className="subtitle theme-gradient">My Work</span>
              </div>
              <h2 className="title split-collab">Projects</h2>
              <p className="description mt--20">
                I have provided effective projects to different industries and clients 
                over the years. My apps are applied to various business models, including 
                tourism, education, sports, and e-commerce.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {misterSaadProjects.map((project, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="portfolio-card-mister-saad single-animation tmponhover">
                <div className="thumbnail">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    style={{ objectFit: "cover", width: "100%", height: "250px" }}
                  />
                </div>
                <div className="portfolio-content">
                  <h4 className="title">{project.title}</h4>
                  {project.description && (
                    <p className="description">{project.description}</p>
                  )}
                </div>
                <div className="tmp-light light-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

