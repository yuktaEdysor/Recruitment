"use client";

import React, { useState, useEffect } from "react";

interface ContactCtaProps {
  activeTab: "candidate" | "employer";
}

const tabStyles = {
  candidate: {
    bg: "bg-[#0A57A41A]",
    primaryBtn: "bg-[#0A57A4] hover:bg-[#0070e0] active:bg-[#005bbf] text-white",
    outlineBtn:
      "bg-white border-2 border-[#1a8cff] text-white hover:bg-blue-50 active:bg-blue-100",
  },
  employer: {
    bg: "bg-[#DBEEFF]",
    primaryBtn: "bg-primary hover:bg-[#001530] active:bg-[#001530] text-white",
    outlineBtn:
      "bg-white border-2 border-[#002a54] text-primary hover:bg-gray-50 active:bg-gray-200",
  },
};

const ContactCta = ({ activeTab }: ContactCtaProps) => {
  const styles = tabStyles[activeTab];
  const [showCalendar, setShowCalendar] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showCalendar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showCalendar]);

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`${styles.bg} rounded-2xl py-10 px-8 md:px-12 text-center`}>
          <h2 className="text-xl md:text-2xl text-black font-bold mb-2">
            Still have questions?
          </h2>
          <p className="text-sm md:text-base text-black mb-6">
            Our team is here to help. Get in touch and we&apos;ll respond within 24 hours.
          </p>

          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowCalendar(true)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${styles.primaryBtn}`}
            >
              Recruitment Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowCalendar(false); }}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 overflow-hidden"
            style={{ height: "min(80vh, 600px)" }}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-[#002a54]">Book a Recruitment Consultation</h3>
                <p className="text-xs text-black mt-0.5">Select a date and time that works for you</p>
              </div>
              <button
                onClick={() => setShowCalendar(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 cursor-pointer text-lg font-bold"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* iframe */}
            <div className="w-full" style={{ height: "calc(100% - 73px)" }}>
              <iframe
                src="https://cal.com/bot-edysor-mqvfma/recruitment?theme=light&primaryColor=002A54&layout=month_view&hideEventTypeDetails=1&embed=inline"
                width="100%"
                height="100%"
                frameBorder={0}
                allow="camera; microphone; display-capture"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactCta;
