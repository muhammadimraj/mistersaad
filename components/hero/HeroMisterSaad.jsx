"use client";
import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function HeroMisterSaad() {
  const form = useRef();

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
    <div className="banner-area-mister-saad tmp-section-gap" id="home" style={{
      background: 'linear-gradient(135deg, #4A2C7D 0%, #2D1B4E 50%, #1A0F35 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Curve Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60%',
        height: '100%',
        opacity: 0.8,
        zIndex: 1
      }}>
        <Image
          src="/assets/saad-images/banner-curve.png"
          alt="Decorative curves"
          fill
          style={{ objectFit: 'cover', objectPosition: 'right center' }}
          priority
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row g-5 align-items-center">
          {/* Left Content */}
          <div className="col-lg-7">
            <div className="banner-content-mister-saad">
              <div className="section-head section-head-one-side text-align-left">
                <h1 className="title split-collab" style={{ 
                  color: '#fff', 
                  fontSize: '3.5rem', 
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  marginBottom: '30px'
                }}>
                  Expert Mobile App Developer Dubai
                </h1>
              </div>
              <div className="banner-description">
                <p className="disc mb--30" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                  Hi, I am Muhammad Saad, a seasoned mobile app developer in Dubai. 
                  I have been assisting companies in Dubai, Abu Dhabi, and worldwide 
                  for over 20 years. I am interested in developing and enhancing mobile 
                  apps for both iOS and Android platforms. Developing apps based on the 
                  business objectives and user requirements, I provide them using React 
                  Native, Flutter, or Native technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-5">
            <div className="contact-form-wrapper" style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div className="contact-form-inner">
                <h3 className="form-title" style={{ 
                  color: '#fff', 
                  textTransform: 'uppercase',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '30px'
                }}>
                  Get a quote today
                </h3>
                <form ref={form} onSubmit={sendMail} className="contact-form-mister-saad">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="input-field"
                      style={{
                        background: 'rgba(255,255,255,0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '15px 20px',
                        width: '100%',
                        marginBottom: '15px'
                      }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="input-field"
                      style={{
                        background: 'rgba(255,255,255,0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '15px 20px',
                        width: '100%',
                        marginBottom: '15px'
                      }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Phone Numbers"
                      className="input-field"
                      style={{
                        background: 'rgba(255,255,255,0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '15px 20px',
                        width: '100%',
                        marginBottom: '15px'
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Write Your Message"
                      className="input-field"
                      rows="4"
                      style={{
                        background: 'rgba(255,255,255,0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '15px 20px',
                        width: '100%',
                        marginBottom: '20px',
                        resize: 'none'
                      }}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="tmp-btn w-100" style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '15px',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      textTransform: 'uppercase'
                    }}>
                      <span className="btn-text">Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

