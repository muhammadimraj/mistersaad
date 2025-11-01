"use client";
import React from "react";
import Image from "next/image";

export default function HowToHire() {
  const benefits = [
    {
      title: "Custom Solutions",
      description: "Have applications built to suit your business.",
    },
    {
      title: "Time and Cost Saving",
      description: "Eliminate the possibility of frequent errors and improve development efficiency.",
    },
    {
      title: "Specialist Advice",
      description: "Gain knowledge, ideas, and exemplary practice along the way.",
    },
    {
      title: "Multi-Platform Compatibility",
      description: "Have your app run well on iOS, Android, and web platforms.",
    },
  ];

  return (
    <section className="how-to-hire-area tmp-section-gap bg-dark-gradient" id="how-to-hire">
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-head text-center">
              <h2 className="title split-collab" style={{ fontSize: '42px', lineHeight: '1.3' }}>
                HOW TO HIRE A DUBAI APP DEVELOPER ON A SHOESTRING BUDGET?
              </h2>
              <p className="description mt--30" style={{ maxWidth: '1000px', margin: '30px auto 0' }}>
                Most companies believe that it is costly to develop an app, and collaboration with a cheap 
                app developer in Dubai does not imply the sacrifice of quality. An expert developer is 
                valuable because he or she develops applications that fit your objectives and at a low cost. 
                The reason why a qualified Dubai app developer is a good idea is as follows:
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb--30">
            <div className="benefits-list">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-item mb--30">
                  <h4 className="benefit-title" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>
                    <span className="theme-gradient" style={{ fontWeight: '700' }}>{benefit.title}</span>
                    <span style={{ fontWeight: '400' }}>—{benefit.description}</span>
                  </h4>
                </div>
              ))}
              
              <div className="closing-text mt--40">
                <p className="description">
                  When you find the right app development Dubai specialist, you get to access 
                  professional services that are well-balanced in terms of quality, cost, and innovativeness.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="process-image-wrapper" style={{ position: 'relative', padding: '40px' }}>
               <Image src="/assets/images/latest-portfolio/tab-image-6.png" alt="How To Hire" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

