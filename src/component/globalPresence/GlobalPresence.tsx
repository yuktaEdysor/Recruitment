"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  {
    value: "100+",
    label: "Industry Tie-Ups",
    variant: "filled" as const,
  },
  {
    value: "5000+",
    label: "Successful Hires",
    variant: "outline" as const,
  },
  {
    value: "Fast TAT",
    label: "Dedicated team of HRs",
    variant: "dark" as const,
  },
];

const circleStyle = {
  outer: "rounded-full shadow-[0_0_25px_rgba(59,130,246,0.35)]",
  inner:
    "w-full h-full rounded-full bg-white flex flex-col items-center justify-center",
  valueColor: "text-primary",
  textColor: "text-primary",
};

const GlobalPresence = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3">
          Fast. Vast. Proven
        </h2>
        <p className="text-base md:text-lg text-black mb-16 max-w-2xl mx-auto">
          Our wide network and proven HR expertise help us work efficiently.
        </p>

        {/* Stats Circles */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div
                className={`w-52 h-52 md:w-64 md:h-64 ${circleStyle.outer}`}
              >
                <div className={circleStyle.inner}>
                  <span className={`text-4xl md:text-5xl font-bold leading-tight ${circleStyle.valueColor}`}>
                    {stat.value}
                  </span>
                  <span
                    className={`text-sm md:text-base mt-2 font-medium max-w-[140px] leading-snug ${circleStyle.textColor}`}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
