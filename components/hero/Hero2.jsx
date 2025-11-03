"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { gsap } from "gsap";

export default function Hero2({ light = false }) {
  const form = useRef();

  useEffect(() => {
    const bannerArea = document.querySelector(".tmp-banner-one-area");
    if (!bannerArea) return;

    const handleMouseMove = (e) => {
      const wx = window.innerWidth;
      const wy = window.innerHeight;

      const x = e.pageX - bannerArea.offsetLeft;
      const y = e.pageY - bannerArea.offsetTop;

      const newx = x - wx / 2;
      const newy = y - wy / 2;

      const animateElements = document.querySelectorAll(".animate-on-hover");

      animateElements.forEach((element) => {
        const speedAttr = element.getAttribute("data-speed");
        const revert = element.hasAttribute("data-revert");

        let speed = parseFloat(speedAttr || "0.02");
        if (revert) speed *= -1;

        gsap.to(element, {
          duration: 1,
          x: newx * speed,
          y: newy * speed,
          ease: "power2.out"
        });
      });
    };

    bannerArea.addEventListener("mousemove", handleMouseMove);

    return () => {
      bannerArea.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cyobi0y", "template_4nbexqj", form.current, {
        publicKey: "D79JdTqxXVCcQBXL4",
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Message Sent successfully!", { autoClose: 5000 });
          form.current.reset();
        } else {
          toast.error("Oops! Message not Sent!", { autoClose: 5000 });
        }
      })
      .catch((error) => {
        toast.error(`Error sending message: ${error}`, { autoClose: 5000 });
      });
  };

  return (
    <div className="tmp-banner-one-area add-pattern" id="home">
      <div className="separator-animated-border border-top-footer animated-true"></div>
      <div className="container">
        <div className="banner-one-main-wrapper">
          <div className="row">
            <div className="col-lg-7 order-lg-1">
              <div className="inner">
                {/* Google Rating Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '12px 25px',
                  borderRadius: '50px',
                  marginBottom: '25px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  backdropFilter: 'blur(10px)'
                }} className="tmp-scroll-trigger tmp-fade-in animation-order-1">
                  {/* Google Logo */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1a1a1a'
                    }}>Google</span>
                  </div>

                  {/* Divider */}
                  <div style={{
                    width: '1px',
                    height: '30px',
                    background: 'rgba(0, 0, 0, 0.1)'
                  }}></div>

                  {/* Rating - All in one line */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1a1a1a'
                    }}>4.9/5 Rating</span>
                    <div style={{
                      display: 'flex',
                      gap: '2px'
                    }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFA500">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#666'
                    }}>
                      500+ Reviews
                    </span>
                  </div>
                </div>

                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5 animate-on-hover" data-speed="0.015">
                  Expert Mobile App Developer Dubai
                </h1>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3 animate-on-hover" data-speed="0.01">
                  Hi, I am Muhammad Saad, a seasoned mobile app developer in Dubai. 
                  I have been assisting companies in Dubai, Abu Dhabi, and worldwide 
                  for over 20 years. I am interested in developing and enhancing mobile 
                  apps for both iOS and Android platforms. Developing apps based on the 
                  business objectives and user requirements, I provide them using React 
                  Native, Flutter, or Native technologies.
                </p>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2">
              <div className="contact-form-wrapper" style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '15px 20px',
                border: '1px solid rgba(255,255,255,0.1)',
                width: '90%',
              }}>
                <div className="contact-form-inner">
                  <h3 className="form-title" style={{ 
                    textTransform: 'uppercase',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    marginBottom: '30px',
                    color: '#fff',
                    textAlign: 'center'
                  }}>
                    Get a Free Consultation
                  </h3>
                  <form ref={form} onSubmit={sendMail} className="contact-form-mister-saad">
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="input-field"
                        style={{
                          background: '#fff',
                          border: 'none',
                          borderRadius: '0px',
                          padding: '15px 20px',
                          width: '100%',
                          fontSize: '15px',
                          color: '#666',
                          outline: 'none',
                          fontWeight: 500,
                        }}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="input-field"
                        style={{
                          background: '#fff',
                          border: 'none',
                          borderRadius: '0px',
                          padding: '15px 20px',
                          width: '100%',
                          fontSize: '15px',
                          color: '#666',
                          outline: 'none',
                          fontWeight: 500,
                        }}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Number"
                        className="input-field"
                        style={{
                          background: '#fff',
                          border: 'none',
                          borderRadius: '0px',
                          padding: '15px 20px',
                          width: '100%',
                          fontSize: '15px',
                          color: '#666',
                          outline: 'none',
                          fontWeight: 500,
                        }}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        className="input-field"
                        rows="3"
                        style={{
                          background: '#fff',
                          border: 'none',
                          borderRadius: '0px',
                          padding: '15px 20px',
                          width: '100%',
                          fontSize: '15px',
                          color: '#666',
                          outline: 'none',
                          fontWeight: 500,
                          minHeight: 'auto',
                        }}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="hero-submit-btn w-100" style={{
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                        border: 'none',
                        borderRadius: '0px',
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        padding: '15px 20px',
                        letterSpacing: '1px',
                        lineHeight: '1.5',
                        fontWeight: 500,
                      }}>
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {light ? (
        ""
      ) : (
        <div className="slider-bg-light">
          <Image
            className="blocksync-scroll-trigger fade_in animation-order-8"
            alt="Top Light Shape"
            src="/assets/images/banner/shape/light.svg"
            width={554}
            height={532}
          />
        </div>
      )}
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
