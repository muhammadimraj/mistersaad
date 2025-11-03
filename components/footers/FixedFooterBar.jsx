"use client";
import React from "react";
import Image from "next/image";

export default function FixedFooterBar() {
  return (
    <div className="fixed-footer-bar">
      <div className="footer-image-section">
        <Image
          src="/assets/saad-images/saad.png"
          alt="Saad"
          width={150}
          height={150}
          className="footer-person-image"
        />
      </div>
      <div className="fixed-footer-content">
        
        <div className="footer-text-section">
          <h3 className="footer-title">Project? Let's meet for a coffee.</h3>
          <p className="footer-subtitle">If you are interested, click on Book a call.</p>
        </div>

        <div className="footer-cta-section">
          <a
            href="tel:+971553486284"
            className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
          >
            <div className="icon-reverse-wrapper">
              <span className="btn-text">+971 55 3486 284</span>
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
                <i className="fa-solid fa-phone" />
              </span>
              <span className="btn-icon">
                <i className="fa-solid fa-phone" />
              </span>
            </div>
          </a>
          
          <a
            href="https://wa.me/971553486284"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp-btn"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

