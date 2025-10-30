import React from "react";
import Image from "next/image";

export default function WhyHireDubaiDeveloper() {
  return (
    <section className="why-hire-dubai-developer tmp-section-gap" id="why-hire">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="developer-image-wrapper tmp-scroll-trigger tmp-fade-in animation-order-1">
              <Image
                src="/assets/saad-images/hire.jpg"
                alt="App Developer in Dubai"
                width={600}
                height={600}
                style={{ 
                  borderRadius: '20px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="developer-content">
              <div className="section-head section-head-one-side text-align-left mb--40">
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                  DO YOU NEED AN APP DEVELOPER IN DUBAI?
                </h2>
              </div>

              <div className="description-wrapper">
                <p className="disc mb--20 tmp-scroll-trigger tmp-fade-in animation-order-3">
                  A Dubai app developer can provide significant benefits to your business. 
                  With extensive experience in creating both native and cross-platform mobile 
                  applications, I have developed over 50 successful applications on behalf of 
                  clients in the UAE, Saudi Arabia, and other countries.
                </p>

                <p className="disc mb--20 tmp-scroll-trigger tmp-fade-in animation-order-4">
                  The mobile application market is growing at a rapid pace, and there are 
                  millions of apps competing to draw attention. Companies are compelled to 
                  keep pace with this digital transformation in order to remain competitive 
                  and relevant. Mobile applications control the lifestyles of consumers, 
                  whether it is shopping, entertainment, communication, or services.
                </p>

                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-5">
                  Your project will be unique because of working with an experienced and 
                  certified developer in Dubai. My competence enables companies to develop 
                  applications that are functional, scalable, future-oriented, and user-centric.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

