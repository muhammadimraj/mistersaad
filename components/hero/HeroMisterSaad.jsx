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
              }}>
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

