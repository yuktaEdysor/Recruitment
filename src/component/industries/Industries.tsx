"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Industry {
  name: string;
  image: string;

}

const industriesRow1: Industry[] = [
  { name: "Information Technology (IT)", image: "/Images/Industries-images/Information-Technology.jpg" },
  { name: "Non-IT / Corporate Functions", image: "/Images/Industries-images/Non-IT-Corporate-Functions.jpg" },
  { name: "Logistics & Supply Chain", image: "/Images/Industries-images/Logistics-Supply.jpg" },
  { name: "eCommerce & Retail", image: "/Images/Industries-images/ecommerce.jpg" },
  { name: "BPO / KPO", image: "/Images/Industries-images/BPO.jpg" },
  { name: "Banking & Financial Services", image: "/Images/Industries-images/banking-industry.jpg" },
  { name: "Human Resources (HR)", image: "/Images/Industries-images/HR.jpg" },
  { name: "Sales & Marketing", image: "/Images/Industries-images/advertising-industry.jpg" },
];

const industriesRow2: Industry[] = [
  { name: "Construction & Infrastructure", image: "/Images/Industries-images/construction.jpg" },
  { name: "Manufacturing & Plant Operations", image: "/Images/Industries-images/manufacturing-Plant-Operations.jpg" },
  { name: "Healthcare & Pharmaceuticals", image: "/Images/Industries-images/Healthcare-Pharmaceuticals.jpg" },
  { name: "Education & EdTech", image: "/Images/Industries-images/education.jpg" },
  { name: "Hospitality & Travel", image: "/Images/Industries-images/travel-industry.jpg" },
  { name: "FMCG & Consumer Goods", image: "/Images/Industries-images/consumer-goods.jpg" },
  { name: "Real Estate", image: "/Images/Industries-images/real-statee.jpg" },
  { name: "Telecom", image: "/Images/Industries-images/telecom.jpg" },
  { name: "Automobile & Auto Components", image: "/Images/Industries-images/automobile.jpeg" },
];

const industriesContent = {
  candidate: {
    badge:"Industries",
    heading: "Find Where You Belong",
    description:
      "Explore the industries we work with and take the next step toward a role that feels right for you.",
  },
  employer: {
    badge:'Industries',
    heading: "We have Talent in Every Industry",
    description:
      "We work across diverse industries to bring you qualified candidates that fit your specific needs and business goals.",
  },
};

const Industries = ({ activeTab }: { activeTab: "candidate" | "employer" }) => {
  const sliderBase = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } },
    ],
  };

  const settingsRow1 = { ...sliderBase };
  const settingsRow2 = { ...sliderBase, rtl: true };

  const IndustryCard = ({ industry }: { industry: Industry }) => (
    <div className="px-2">
      <div
        className="industry-card rounded-2xl overflow-hidden h-60 relative cursor-pointer"
        style={{
          backgroundImage: `url(${industry.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle top overlay */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Bottom gradient for text readability */}
       
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0) 70%)",
          }}
        />
        {/* Name at bottom-left like reference */}
        <div className="absolute bottom-0 left-0 p-4 z-10">
          <div className="text-white text-lg font-semibold leading-tight drop-shadow-lg">
            {industry.name}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="industries" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
        <span className="inline-block border border-primary text-primary text-xs font-medium px-4 py-1.5 rounded-full mb-5 bg-gray-50">
            {industriesContent[activeTab].badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            {industriesContent[activeTab].heading}
          </h2>
          <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
            {industriesContent[activeTab].description}
          </p>
        </div>

        {/* First Row - Moving Right */}
        <div className="mb-6">
          <Slider {...settingsRow1}>
            {industriesRow1.map((industry, index) => (
              <IndustryCard key={index} industry={industry} />
            ))}
          </Slider>
        </div>

        {/* Second Row - Moving Left */}
        <div>
          <Slider {...settingsRow2}>
            {industriesRow2.map((industry, index) => (
              <IndustryCard key={index} industry={industry} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Industries;