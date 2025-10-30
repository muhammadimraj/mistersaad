"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const OdometerComponent = ({ max }) => {
  const pathname = usePathname(); // detect route change
  const odometerRef = useRef(null);
  const odometerInitRef = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let mounted = true;

    import("odometer").then((Odometer) => {
      if (mounted && odometerRef.current) {
        odometerInitRef.current = new Odometer.default({
          el: odometerRef.current,
          value,
        });
      }
    });

    return () => {
      mounted = false;
      odometerInitRef.current = null;
    };
  }, [pathname]); // re-run on route change

  useEffect(() => {
    if (odometerRef.current && odometerInitRef.current) {
      odometerInitRef.current.update(value);
    }
  }, [value]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setValue(max);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    return () => {
      if (odometerRef.current) {
        observer.unobserve(odometerRef.current);
      }
    };
  }, []);

  return (
    <div ref={odometerRef} key={pathname} className="odometer">
      0
    </div>
  );
};

export default OdometerComponent;
