"use client";

import React from "react";

const services = [
  {
    title: "Smart Candidate Screening",
    description:
      "Our AI quickly scans resumes and matches candidates to your job requirements. It ranks them based on skills, experience, and relevance, so you can focus only on the best-fit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8a3 3 0 0 1 3 3" />
      </svg>
    ),
  },
  {
    title: "Resume Analysis & Ranking",
    description:
      "We use advanced AI to evaluate a candidate's experience, skills, and role fit to make sure you receive only the most relevant and well-matched profiles for your role.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Automated Pre-Screening Interviews",
    description:
      "It conducts structured chat or video interviews powered by AI. The system asks role-specific questions, evaluates responses, and provides clear summaries with scoring insights.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
];

const RecruiterServices = () => {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-block border border-primary text-primary text-xs font-medium px-4 py-1.5 rounded-full mb-5 bg-white">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-black text-base md:text-lg max-w-xl">
            Explore how our AI helps you find, screen, and hire the right candidates faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#465FFF] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#0A57A41A] flex items-center justify-center text-indigo-500 mb-3">
                {service.icon}
              </div>

              {/* Title */}
              <div className="leading-tight text-base font-semibold text-black mb-3">
                {service.title}
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-[1.5rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruiterServices;
