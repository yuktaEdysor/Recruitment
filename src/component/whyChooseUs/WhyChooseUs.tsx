"use client";

import React, { useState } from "react";
import Image from "next/image";

const points = [
  {
    number: "01",
    title: "Thorough Evaluation & Pre-Screening",
    description:
      "Every candidate goes through a detailed screening and assessment process before being introduced to you. We evaluate their skills to ensure they match your requirements.",
    image: "/Images/Recruiter/Thorough-Evaluation.png",
  },
  {
    number: "02",
    title: "Experienced HR Professionals",
    description:
      "Our experienced HR experts bring deep industry knowledge and understand what companies truly look for, carefully assessing each candidate to maintain high standards.",
    image: "/Images/Recruiter/Experienced-HR.png",
  },
  {
    number: "03",
    title: "Hire in Hours, Not Months",
    description:
      "Since every candidate completes our preliminary screening, you connect only with professionals who meet industry standards, enabling faster hiring.",
    image: "/Images/Recruiter/Industry-Aligned.png",
  },
];

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="w-full py-16 md:py-24" style={{ background: "#CADFF066" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section heading */}
        <div className="mb-10 md:mb-14">
          {/* <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--primary-emp-text)" }}
          >
            Why Partner With Us
          </p> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-xl">
            What makes Us Different?
          </h2>
                 <p className="text-base md:text-lg text-black/80 ">
           We believe great hiring starts with the right foundation.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Points */}
          <div className="flex-1 flex flex-col divide-y divide-white/10">
            {points.map((point, index) => (
              <div
                key={index}
                className="group py-8 cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <span
                    className="text-4xl font-bold tabular-nums leading-none select-none transition-colors duration-300"
                    style={{
                      color:
                        hoveredIndex === index
                          ? "black"
                          : "rgba(27, 25, 25, 0.2)",
                    }}
                  >
                    {point.number}
                  </span>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg md:text-xl font-semibold mb-2 transition-colors duration-300"
                      style={{
                        color:
                          hoveredIndex === index
                            ? "black"
                            : "rgba(58, 52, 52, 0.55)",
                      }}
                    >
                      {point.title}
                    </h3>
                    {/* Description expands on hover */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: hoveredIndex === index ? "200px" : "0px",
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                    >
                      <p className="text-sm md:text-base text-black leading-relaxed pt-1">
                        {point.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <span
                    className="text-2xl transition-all duration-300 mt-1 flex-shrink-0"
                    style={{
                      color:
                        hoveredIndex === index
                          ? "black"
                          : "rgba(58, 52, 52, 0.55)",
                      transform:
                        hoveredIndex === index
                          ? "rotate(0deg)"
                          : "rotate(-90deg)",
                    }}
                  >
                    ↓
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image popup */}
          <div className="w-full lg:w-[420px] xl:w-[350px] flex-shrink-0 sticky top-24">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                  {/* subtle overlay so image blends with dark bg */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
