"use client";
import React from "react";
import Image from "next/image";

const tools = [
  { name: "React Native", icon: "fa-brands fa-react", color: "#61DAFB" },
  { name: "Flutter", icon: "fa-solid fa-mobile-screen", color: "#02569B" },
  { name: "iOS", icon: "fa-brands fa-apple", color: "#000000" },
  { name: "Android", icon: "fa-brands fa-android", color: "#3DDC84" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
  { name: "Firebase", icon: "fa-solid fa-fire", color: "#FFCA28" },
  { name: "Swift", icon: "fa-brands fa-swift", color: "#FA7343" },
  { name: "Kotlin", icon: "fa-solid fa-code", color: "#7F52FF" },
];

export default function ToolsTechnology() {
  return (
    <div className="tmp-tools-area tmp-section-gap bg-dark-gradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb--50">
              <div className="section-sub-title center-title">
                <span className="subtitle theme-gradient">My Stack</span>
              </div>
              <h2 className="title split-collab">Tools & Technology</h2>
              <p className="description mt--20">
                Tools do not make much sense when it comes to app development in Dubai, 
                as powerful tools can only be as powerful as the skills. I apply the most 
                recent frameworks and platforms and merge them with innovative approaches 
                and industry knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {tools.map((tool, idx) => (
            <div key={idx} className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="tool-card single-animation tmponhover">
                <div className="tool-icon" style={{ color: tool.color }}>
                  <i className={tool.icon}></i>
                </div>
                <h5 className="tool-name">{tool.name}</h5>
                <div className="tmp-light light-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

