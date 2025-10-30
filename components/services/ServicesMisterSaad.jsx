"use client";
import React from "react";
import { misterSaadServices } from "@/data/services";

export default function ServicesMisterSaad() {
  return (
    <div className="tmp-service-area tmp-section-gap" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb--50">
              <div className="section-sub-title center-title">
                <span className="subtitle theme-gradient">What I Offer</span>
              </div>
              <h2 className="title split-collab">Services</h2>
              <p className="description mt--20">
                MOBILE APP DEVELOPMENT DUBAI – Dubai App Developer
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {misterSaadServices.map((service, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 col-12">
              <div className="service-card-mister-saad single-animation tmponhover">
                <div className="icon-wrapper">
                  <i className={service.iconClass}></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="tmp-light light-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

