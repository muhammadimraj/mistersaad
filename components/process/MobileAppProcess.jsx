"use client";
import React from "react";
import Image from "next/image";

export default function MobileAppProcess() {
  const processSteps = [
    {
      title: "PLANNING IDEA &",
      subtitle: "PROTOTYPE",
      description:
        "The initial level is planning and prototyping. A prototype is not a fully functional application; it is only an outline of what your future application will look like, how it will work, and what it will do. This is done to make certain that there is clarity and creativity before development goes into it. We mitigate risks, save time, and establish a solid foundation for success by visualizing your app early.",
      icon: "🎨",
    },
    {
      title: "FULLY DEVELOPED DATABASE,",
      subtitle: "API & BACKEND",
      description:
        "At this point, I prepared the database, API, and the backend architecture. The front end and the backend are bound by APIs (Application Programming Interfaces) to facilitate seamless performance and communication between features. A powerful backend ensures security, scalability, and reliability, which is essential in apps that are designed to facilitate real-time interactions among users.",
      icon: "🔧",
    },
    {
      title: "LAUNCHING & ONLINE",
      subtitle: "MARKETING",
      description:
        "I also extensively test the app on various devices and operating systems before its launch. Releasing untested apps is a major failure for many companies, resulting in poor user experiences and high bounce rates. My practice guarantees you a bug-free, optimized, and market-ready application. I also contribute to digital marketing approaches once your app is launched and help it gain traction, downloads, and interaction.",
      icon: "🚀",
    },
  ];

  return (
    <section className="mobile-app-process-area bg-dark-gradient" id="process">
      <div className="container">
        {/* Heading Section */}
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-head text-center">
              <div className="section-sub-title center-title">
                <span className="subtitle theme-gradient">amistersaad.</span>
              </div>
              <h2 className="title split-collab">
                MOBILE APPLICATIONS PROCESS
              </h2>
            </div>
          </div>
        </div>

        {/* First Row: Content Left, Image Right */}
        <div className="row align-items-center mb--80">
          <div className="col-lg-6 col-md-12 mb--30">
            {processSteps.slice(0, 2).map((step, idx) => (
              <div key={idx} className="process-step-wrapper mb--40">
                <div className="process-step-content">
                  <h3 className="process-title" style={{ fontSize: '28px', marginBottom: '10px', fontWeight: '700' }}>
                    {step.title}
                  </h3>
                  <h4 className="process-subtitle" style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '700' }}>
                    {step.subtitle}
                  </h4>
                  <p className="description">
                    {step.description}
                  </p>
                </div>
                {idx === 0 && (
                  <div style={{ marginTop: '40px', marginBottom: '40px', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                )}
              </div>
            ))}
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="process-image-wrapper" style={{ position: 'relative', padding: '40px' }}>
              <Image 
                src="/assets/images/latest-portfolio/tab-image-6.png" 
                alt="Mobile App Process" 
                width={500} 
                height={500}
                style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Second Row: Image Left, Content Right */}
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 order-lg-1 order-2">
            <div className="process-image-wrapper" style={{ position: 'relative', padding: '40px' }}>
              <Image 
                src="/assets/images/latest-portfolio/tab-image-5.png" 
                alt="Mobile App Development" 
                width={500} 
                height={500}
                style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 order-lg-2 order-1 mb--30">
            <div className="process-step-wrapper">
              <div className="process-step-content">
                <h3 className="process-title" style={{ fontSize: '28px', marginBottom: '10px', fontWeight: '700' }}>
                  {processSteps[2].title}
                </h3>
                <h4 className="process-subtitle" style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '700' }}>
                  {processSteps[2].subtitle}
                </h4>
                <p className="description" style={{ marginBottom: '30px' }}>
                  {processSteps[2].description}
                </p>

                {/* Additional Content Section */}
                <div style={{ marginTop: '40px' }}>
                  <h4 className="process-subtitle" style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>
                    POST-LAUNCH SUPPORT
                  </h4>
                  <p className="description" style={{ marginBottom: '20px' }}>
                    My commitment doesn't end at launch. I provide ongoing support and maintenance to ensure your app continues to perform optimally. This includes regular updates, bug fixes, feature enhancements, and adapting to new OS versions and device requirements.
                  </p>
                </div>

                <div style={{ marginTop: '30px' }}>
                  <h4 className="process-subtitle" style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>
                    PERFORMANCE MONITORING
                  </h4>
                  <p className="description">
                    I implement analytics and monitoring tools to track your app's performance, user engagement, and identify areas for improvement. This data-driven approach ensures your app evolves with user needs and market trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

