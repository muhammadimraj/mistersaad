"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SplitText } from "gsap/SplitText";
import gsap, { Back } from "gsap";
export default function TextBanner1() {
  const animatedTextElements = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;

            // Reset if needed
            if (element.animation) {
              element.animation.progress(1).kill();
              element.split.revert();
            }

            element.split = new SplitText(element, {
              type: "lines,words,chars",
              linesClass: "split-line",
            });

            gsap.set(element, { perspective: 400 });

            gsap.set(element.split.chars, {
              opacity: 0,
              x: "-10",
              rotateX: "0",
            });

            element.animation = gsap.to(element.split.chars, {
              x: "0",
              y: "0",
              rotateX: "0",
              opacity: 1,
              duration: 1,
              ease: Back.easeOut,
              stagger: 0.02,
            });

            observer.unobserve(element); // Unobserve to avoid repeat
          }
        });
      },
      { threshold: 0.1 }
    ); // Adjust threshold if needed

    observer.observe(animatedTextElements.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="about-content-area">
      <div className="container tmp-section-gap">
        <div className="text-para-doc-wrap">
          <h2
            ref={animatedTextElements}
            className="text-para-documents tmp-scroll-trigger tmp-fade-in tmp-title-split-2 animation-order-1"
          >
            A personal <span>portfolio</span> is a collection of your work, that
            is aa go achievements, and skills that highlights{" "}
            <span>web design</span> in your is abilities and professional
            growth. It serves as A personal to a portfolio in{" "}
            <span>since 2009</span> a collection of your work
          </h2>
          <div className="right-bg-text-para">
            <Image
              alt=""
              src="/assets/images/banner/right-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
          <div className="left-bg-text-para">
            <Image
              alt=""
              src="/assets/images/banner/left-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
