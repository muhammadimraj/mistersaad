"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "How long does it take to develop a mobile app in Dubai?",
    answer: "The schedule will be based on the complexity and features of the app. Simple applications can be developed in 6-8 weeks, whereas more sophisticated applications, including custom applications in Dubai that have integrations and dashboards, can require 3-6 months."
  },
  {
    question: "How expensive is it to develop mobile apps in Dubai?",
    answer: "Prices will differ depending on design, functionality, and platform. Projects of Dubai Mobile App Development can be as low as startup packages and as high as the enterprise level. I also have the flexibility of having different options to fit the various budgets as a freelance app developer in Dubai."
  },
  {
    question: "Do you create both iOS and Android apps?",
    answer: "Yes, I am a developer of mobile applications in Dubai in both iOS and Android. With the help of technologies such as Flutter, React Native, and native development, I develop smooth apps that are compatible with devices."
  },
  {
    question: "Am I going to be part of the development process?",
    answer: "Absolutely. I also keep customers informed throughout the process, including the prototyping and UI/UX design, testing, and launch. My Dubai app development process is based on transparency."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItemStyle = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    marginBottom: '15px',
    paddingBottom: '15px'
  };

  const faqQuestionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '20px 0',
    transition: 'all 0.3s ease'
  };

  const faqAnswerStyle = (isActive) => ({
    maxHeight: isActive ? '500px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.4s ease',
    paddingBottom: isActive ? '20px' : '0'
  });

  const iconStyle = {
    fontSize: '20px',
    transition: 'transform 0.3s ease',
    minWidth: '30px',
    textAlign: 'center'
  };

  return (
    <div className="tmp-faq-area tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb--50">
              <div className="section-sub-title center-title">
                <span className="subtitle theme-gradient">Common Questions</span>
              </div>
              <h2 className="title split-collab">Frequently Asked Queries</h2>
              <p className="description mt--20">
                I recommend going through the following FAQs to better understand 
                how application projects work in Dubai.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-accordion">
              {faqData.map((faq, idx) => (
                <div key={idx} style={faqItemStyle}>
                  <div 
                    style={faqQuestionStyle}
                    onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                  >
                    <h4 style={{ margin: 0, fontSize: '20px', fontWeight: '600', paddingRight: '20px' }}>
                      {faq.question}
                    </h4>
                    <span style={iconStyle}>
                      <i className={`fa-solid ${activeIndex === idx ? 'fa-minus' : 'fa-plus'} theme-gradient`}></i>
                    </span>
                  </div>
                  <div style={faqAnswerStyle(activeIndex === idx)}>
                    <p className="description" style={{ margin: 0, lineHeight: '1.8' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

