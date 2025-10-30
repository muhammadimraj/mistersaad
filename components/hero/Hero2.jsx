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
          <div className="row align-items-center">
            <div className="col-lg-7 order-lg-1">
              <div className="inner">
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
                padding: '40px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div className="contact-form-inner">
                  <h3 className="form-title" style={{ 
                    textTransform: 'uppercase',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '30px',
                    color: '#fff',
                    textAlign: 'center'
                  }}>
                    Get a quote today
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
                          borderRadius: '8px',
                          padding: '15px 20px',
                          width: '100%',
                          fontSize: '15px',
                          color: '#666',
                          outline: 'none'
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
                          borderRadius: '8px',
                          padding: '15px 20px',
                          width: '100%',
                          fontSize: '15px',
                          color: '#666',
                          outline: 'none'
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
                          borderRadius: '8px',
                          padding: '15px 20px',
                          width: '100%',
                          fontSize: '15px',
                          color: '#666',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        className="input-field"
                        rows="4"
                        style={{
                          background: '#fff',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '15px 20px',
                          width: '100%',
                          fontSize: '15px',
                          color: '#666',
                          resize: 'none',
                          outline: 'none'
                        }}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="hero-submit-btn w-100" style={{
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        padding: '18px 20px',
                        letterSpacing: '1px',
                        lineHeight: '1.5'
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
