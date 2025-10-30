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
          width={180}
          height={180}
          className="footer-person-image"
        />
      </div>
      <div className="fixed-footer-content">
        
        <div className="footer-text-section">
          <h3 className="footer-title">Project? Let's meet for a coffee.</h3>
          <p className="footer-subtitle">If you are interested, click on Book a call.</p>
        </div>

        <div className="footer-cta-section">
          <a href="tel:+971553486284" className="footer-phone-btn">
            <i className="fa-solid fa-phone"></i>
            <span>+971 55 3486 284</span>
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

