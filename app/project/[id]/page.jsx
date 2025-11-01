"use client";
import React from "react";
import { useParams } from "next/navigation";
import { portfolioItems2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = parseInt(params.id);
  
  const project = portfolioItems2.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="tmp-main-wrapper">
        <Header1 />
        <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="text-center">
            <h2>Project Not Found</h2>
            <Link href="/" className="tmp-btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer1 />
      </div>
    );
  }

  return (
    <div className="tmp-main-wrapper">
      <Header1 />
      
      <div className="project-details-area tmp-section-gap">
        <div className="container">
          {/* Back Button */}
          <div className="row mb--40">
            <div className="col-lg-12">
              <Link href="/#portfolio" className="tmp-btn btn-border" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 30px',
                borderRadius: '50px',
                border: '2px solid var(--color-border)',
                background: 'transparent',
                color: 'var(--color-body)',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                <i className="fa-solid fa-arrow-left"></i>
                Back to Projects
              </Link>
            </div>
          </div>

          {/* Project Title */}
          <div className="row mb--40">
            <div className="col-lg-12">
              <div className="project-title-wrapper">
                <h1 className="title" style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: 'var(--color-heading)',
                  marginBottom: '20px',
                  lineHeight: '1.2'
                }}>
                  {project.title}
                </h1>
                <div className="tag-items">
                  <ul style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', padding: 0, listStyle: 'none' }}>
                    {project.tags.map((tag, index) => (
                      <li key={index}>
                        <span className="tag-item" style={{
                          padding: '8px 20px',
                          borderRadius: '20px',
                          background: 'var(--color-gray-2)',
                          color: 'var(--color-primary)',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="project-description" style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: 'var(--color-body)',
                padding: '40px',
                borderRadius: '20px',
                background: 'var(--color-gray-2)',
              }}>
                <p>{project.description}</p>
              </div>
            </div>
          </div>

          {/* Project Images */}
          <div className="row g-5">
            {project.images && project.images.map((img, index) => (
              <div className="col-lg-12" key={index}>
                <div className="project-image-wrapper" style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  filter: 'brightness(0.7)',
                  transition: 'all 0.3s ease',
                }}>
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    width={1920}
                    height={1080}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '20px',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.3)',
                    pointerEvents: 'none',
                    borderRadius: '20px',
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}

