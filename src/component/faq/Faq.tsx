"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const employerFaqs: FaqItem[] = [
  {
    question: "How can you shortlist the best candidates for us?",
    answer:
      "Based on your specific job requirements, our AI-powered system first identifies all relevant candidates from the database and then ranks them by skills, experience, and education. You receive a prioritized list of the best matches.",
  },
  {
    question: "Do you assist with bulk or volume hiring?",
    answer:
      "Yes, absolutely. You can reach out to multiple shortlisted candidates directly from the platform. Whether you're hiring for a single role or managing volume recruitment, you can reach candidates quickly from the dashboard.",
  },
  {
    question: "Can the AI conduct initial interviews?",
    answer:
      "Yes. Our AI conducts structured screening interviews via chat or video, asks role-specific questions, and evaluates responses. It then generates a summarized report with scoring insights to help you identify qualified candidates.",
  },
  {
    question: "How secure is candidate data?",
    answer:
      "We take data security very seriously. All candidate information is encrypted, securely stored, and accessible only to authorized users. Our platform follows strict data protection standards to ensure privacy and confidentiality at every step.",
  },
  {
    question: "How does Recruitment AI help me hire faster?",
    answer:
      "Recruitment AI automates sourcing, screening, ranking, and initial interviews. Instead of reviewing hundreds of resumes manually, you receive pre-qualified candidates ready for the next step, helping you hire faster and smarter.",
  },
];

interface FaqProps {
  variant: "employer" | "candidate";
}

const candidateFaqs: FaqItem[] = [
  {
    question: "How do I apply for jobs on Recruitment AI?",
    answer:
      "Simply create your profile, upload your resume, and complete the AI assessment. Our system then evaluates your skills and experience to match you with relevant job opportunities.",
  },
  {
    question: "Is the AI interview difficult?",
    answer:
      "The AI interview is structured and skill-focused. It asks role-related questions to understand your knowledge, experience, and problem-solving ability, ensuring a fair evaluation without unnecessary pressure.",
  },
  {
    question: "Will my profile be shared without my consent?",
    answer:
      "No. Your profile is only shared with relevant recruiters when it matches specific job requirements. We ensure your information is handled carefully and professionally.",
  },
  {
    question: "Is my data safe?",
    answer:
      "We take data security very seriously. All personal and professional information is encrypted, securely stored, and accessible only to authorized users. Our platform follows strict data protection standards.",
  },
  {
    question: "How are AI interviews conducted, and will AI automatically reject me?",
    answer:
      "AI interviews are conducted through structured chat or video sessions with role-specific questions. Your responses are evaluated and the final hiring decisions are always made by human recruiters, not AI alone.",
  },
];

const faqData: Record<string, FaqItem[]> = {
  employer: employerFaqs,
  candidate: candidateFaqs,
};

const faqSubtitle: Record<string, string> = {
  employer: "Here are some of the most common questions recruiters ask about our platform.",
  candidate: "Have questions? Here's how our AI-powered hiring process works for you.",
};

const Faq = ({ variant }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = faqData[variant] ?? [];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16  bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block border border-primary text-primary text-xs font-medium px-4 py-1.5 rounded-full mb-5 bg-gray-50">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-black text-base md:text-lg">
            {faqSubtitle[variant]}
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-indigo-200 bg-indigo-50/40" : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 cursor-pointer"
                >
                  <span
                    className={`text-base font-semibold ${
                      isOpen ? "text-indigo-700" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
