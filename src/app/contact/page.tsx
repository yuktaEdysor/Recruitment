"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

const ContactPage = () => {
  const [activeTab] = useState<"candidate" | "employer">("employer");


  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={() => {}} />
      
      <main className="flex-1 pt-28">
        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block border border-gray-300 text-black text-xs font-semibold tracking-widestpx-4 py-1.5 p-2 rounded-full mb-5 bg-white/80 backdrop-blur-sm">
                GET IN TOUCH
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Speak With Our Recruitment Specialists
              </h1>
              <p className="text-black/80 text-lg max-w-2xl mx-auto">
               Connect with our experts to discover how our AI-driven recruitment solutions can make hiring easier, deliver better-matched candidates, and reduce the time it takes to fill roles.
              </p>
            </div>
    {/* Cal.com Booking Widget */}
            <div className="w-full h-[700px] py-[50px]" id="cal-widget">
              <iframe
                src="https://cal.com/bot-edysor-mqvfma/recruitix?theme=light&primaryColor=002A54&layout=month_view&hideEventTypeDetails=1&embed=inline"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="camera; microphone; display-capture"
              />
            </div>
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Info Card 1 */}
              <div className="bg-primary backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Office Location</h3>
                    <p className="text-white/80 text-sm">
                      123 Business Avenue<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Card 2 */}
              <div className="bg-primary backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-white/80 text-sm">
                      +1 (555) 123-4567<br />
                      Mon-Fri, 9am-6pm PST
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Card 3 */}
              <div className="bg-primary backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-white/80 text-sm">
                      hello@recruitmentai.com<br />
                      support@recruitmentai.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

        
          </div>
        </section>
      </main>

      <Footer />

      {/* Cal.com Script */}
     
    </div>
  );
};

export default ContactPage;
