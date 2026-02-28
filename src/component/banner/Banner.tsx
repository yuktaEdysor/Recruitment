"use client";

import React from "react";
import Image from "next/image";

interface BannerProps {
  activeTab: "candidate" | "employer";
  setActiveTab: (tab: "candidate" | "employer") => void;
}

const content = {
  employer: {
    badge: "AI FOR RECRUIT",
    heading: "Right Talent for the Right Vision.",
    subheading:
      "At Edysor, we understand how challenging it can be to hire the right talent. That’s why every candidate undergoes a structured screening and evaluation process, so you can hire in hours, not months.",
    gradient: "from-[#91C7F2] to-[#CADFF0]",
    image: "/Images/Banner/recruiter.png",
    headingColor: "text-black",
    subheadingColor: "text-black/70",
    badgeClass: "border-white text-black bg-white/40",    tabInactiveClass: "text-gray-600 hover:text-gray-900",  },
  candidate: {
    badge: "AI FOR CANDIDATES",
    heading: "Where Talent Meets Opportunity",
    subheading:
      "With over a decade of HR experience and strong industry partnerships, we connect you to the right opportunities. We understand hiring patterns and use our expertise to match your skills and aspirations with roles that truly fit.",
    gradient: "from-[#0E4780] to-[#F4F9FF]",
    image: "/Images/Banner/candidate.png",
    headingColor: "text-white",
    subheadingColor: "text-white/75",
    badgeClass: "border-white/60 text-primary-emmp-text bg-white",
    tabInactiveClass: "text-black hover:text-black/80",
  },
};


const Banner = ({ activeTab, setActiveTab }: BannerProps) => {
  const c = content[activeTab];

  return (
    <section className={`relative w-full bg-gradient-to-b ${c.gradient} pt-28 pb-0 overflow-hidden`}>
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <span className={`inline-block border ${c.badgeClass} text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-7`}>
          {c.badge}
        </span>

        {/* Heading */}
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${c.headingColor} leading-tight mb-5 whitespace-pre-line`}>
          {c.heading}
        </h1>

        {/* Subheading */}
        <p className={`${c.subheadingColor} text-base md:text-lg max-w-2xl mb-10 leading-relaxed`}>
          {c.subheading}
        </p>

        {/* Tab switcher buttons */}
        <div className="flex items-center bg-white backdrop-blur-sm rounded-xl p-1 gap-1 mb-14">
          <button
            onClick={() => setActiveTab("employer")}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "employer"
                ? "bg-primary text-white shadow-sm"
                : c.tabInactiveClass
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
            Recruiter Services
          </button>

          <button
            onClick={() => setActiveTab("candidate")}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "candidate"
                ? "bg-primary-emp text-white shadow-sm"
                : c.tabInactiveClass
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Candidate Services
          </button>
        </div>
      </div>

      {/* Banner image */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Image
          src={c.image}
          alt={activeTab === "employer" ? "Recruiter dashboard" : "Candidate job search"}
          width={1200}
          height={700}
          className="w-full h-auto rounded-t-2xl object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Banner;
