"use client";
import React from "react";
import OdometerComponent from "@/components/common/OdometerComponent";

export default function FactsMisterSaad() {
  const stats = [
    { value: 9.95, suffix: "M", label: "UAE Population" },
    { value: 70, suffix: "%", label: "Total Android Users" },
    { value: 8.95, suffix: "M", label: "Expat Population" },
    { value: 18.38, suffix: "M", label: "Mobile Usage" },
    { value: 80, suffix: "%", label: "Registered Companies" },
    { value: 9.12, suffix: "M", label: "Mobile App Users" },
    { value: 30, suffix: "%", label: "Total iOS Users" },
    { value: 1, suffix: "M", label: "UAE Population" },
    { value: 9.73, suffix: "M", label: "Active Social Users" },
    { value: 20, suffix: "%", label: "UAE App Freelancers" },
  ];

  return (
    <div className="tmp-facts-area tmp-section-gapTop bg-dark-gradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb--50">
              <div className="section-sub-title center-title">
                <span className="subtitle theme-gradient">Statistics</span>
              </div>
              <h2 className="title split-collab">Dubai Statistics Digital App Development</h2>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="single-fact-card text-center">
                <div className="fact-number">
                  <h2 className="counter">
                    <OdometerComponent value={stat.value} />
                    <span className="suffix">{stat.suffix}</span>
                  </h2>
                </div>
                <p className="fact-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

