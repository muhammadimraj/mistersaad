import React from "react";
import Image from "next/image";
import { skills } from "@/data/skills";
export default function Skills1({
  parentClass = "my-skill-area-style-two plr--120 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15 mt--10",
}) {
  return (
    <section className={parentClass} id="resume">
      <div className="tpm-custom-box-bg position-relative overflow-hidden border--radious-20 mb--60">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-12 col-md-12">
              <div className="my-skill-area-left-content-wrap">
                <div className="section-head text-align-left">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle theme-gradient">My Skill</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    My Experts Areas Where I <br />
                    Gained Skill
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    With over 20 years of experience in mobile app development, I have mastered the most powerful 
                    frameworks and technologies in the industry. My expertise spans across React Native for 
                    cross-platform development, Flutter for beautiful and high-performance applications, and Native 
                    technologies for maximum device optimization.
                  </p>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-4" style={{ marginTop: '20px' }}>
                    I specialize in building scalable, efficient, and user-friendly mobile applications that meet 
                    the highest standards of quality. Whether it's iOS or Android, I leverage the right technology 
                    stack to deliver exceptional results that drive business growth and user satisfaction.
                  </p>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-5" style={{ marginTop: '20px' }}>
                    My technical proficiency extends to backend development with Node.js and Express.js, enabling 
                    me to create complete end-to-end solutions. I stay current with the latest industry trends and 
                    best practices to ensure your mobile applications are built using cutting-edge technology and 
                    innovative approaches.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-12 col-md-12">
              <div className="my-skill-card-style-two row">
                {skills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className="col-lg-6 col-md-6 col-12 paralax-image"
                  >
                    <div
                      className={`my-skill-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                        index + 1
                      }`}
                    >
                      <div className="card-icon">
                        <Image
                          alt={skill.iconAlt}
                          src={skill.iconSrc}
                          width={skill.iconWidth}
                          height={skill.iconHeight}
                        />
                      </div>
                      <h3 className="card-title">{skill.title}</h3>
                      <p className="card-para">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tmp-light light-top-left active" />
      </div>
    </section>
  );
}
