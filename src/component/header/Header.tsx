"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  activeTab: "candidate" | "employer";
  setActiveTab: (tab: "candidate" | "employer") => void;
}


const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 pt-5">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-md px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <Image
            src="/Images/Logo/Logo.png"
            alt="Logo"
            width={150}
            height={36}
            priority
          />
        </div>

   

        {/* Right actions */}
        <div className="flex items-center gap-2">
         
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
            style={{ backgroundColor: activeTab === "employer" ? "var(--primary)" : "var(--primary-emp)" }}
          >
            BOOK A DEMO
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
