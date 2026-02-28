"use client";

import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: "⭐",
    title: "Profile Review",
    description:
      "Once you submit your profile, our industry-focused HRs carefully review your profile. We look beyond job titles and focus on your skills, strengths, and career goals to identify roles where you can truly grow.",
  },
  {
    icon: "📞",
    title: "Professional Insight Call",
    description:
      "If your profile matches current or upcoming roles, one of our HR person will connect with you for a one-on-one discussion. This is not just an interview; it's a focused conversation to understand your goals, preferences, and long-term direction.",
  },
  {
    icon: "🔍",
    title: "Screening Phase",
    description:
      "To maintain our reputation for excellence, we conduct a preliminary screening. This ensures that when we present you to an employer, you stand out as a top-tier professional. This stage confirms your technical skills and professional background.",
  },
  {
    icon: "👤",
    title: "Employer Introduction",
    description:
      "We carefully select the right opportunities for you; we do not send your profile everywhere. Once shortlisted, we introduce you directly to the hiring team and guide you through the interview process with proper insights and preparation.",
  },
];

const ProcessTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fillHeight, setFillHeight] = useState(0);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    steps.map(() => false)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled through the section
      const scrollStart = windowHeight * 0.8; // start filling when section is 40% visible
      const scrolled = scrollStart - sectionTop;
      const totalScrollable = sectionHeight;

      let newFill = 0;
      if (scrolled <= 0) {
        newFill = 0;
      } else if (scrolled >= totalScrollable) {
        newFill = 100;
      } else {
        newFill = (scrolled / totalScrollable) * 100;
      }
      setFillHeight(newFill);

      // Check which step icons the fill line has reached
      const fillPx = (newFill / 100) * sectionHeight;
      const newActiveSteps = stepRefs.current.map((stepEl) => {
        if (!stepEl || !sectionRef.current) return false;
        const stepRect = stepEl.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const stepOffset = stepRect.top - sectionRect.top;
        return fillPx >= stepOffset;
      });
      setActiveSteps(newActiveSteps);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-full py-16 md:py-24"
      style={{
        background: "linear-gradient(160deg, #dbeafe 0%, #eff6ff 30%, #ffffff 60%, #e0e7ff 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6" ref={sectionRef}>
        {/* Section heading */}
        <div className="text-center mb-8">
          <div>
 <p className="text-sm font-semibold rounded-xl text-primary-emp-text mb-2">
            Our Process
          </p>
          </div>
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            How We Work With You
          </h2>
        </div>
        <div className="relative">
          {/* Background timeline line (gray) */}
          <div className="absolute left-[22px] top-0 bottom-0 w-[3px] bg-gray-200 rounded-xl" />

          {/* Filled timeline line (purple/blue) */}
          <div
            className="absolute left-[22px] top-0 w-[3px] bg-[#4f46e5] rounded-full transition-all duration-100 ease-out"
            style={{ height: `${fillHeight}%` }}
          />

          {/* Steps */}
          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { stepRefs.current[index] = el; }}
                className="relative flex items-start gap-5 pl-14"
              >
                {/* Icon */}
                <div
                  className={`absolute left-0 w-11 h-11 rounded-xl flex items-center justify-center text-lg z-10 border-2 transition-all duration-300 ${
                    activeSteps[index]
                      ? "bg-[#4f46e5] border-[#4f46e5] text-white shadow-md"
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-emp-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-black leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
