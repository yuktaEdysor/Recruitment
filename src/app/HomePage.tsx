"use client";

import React, { useState } from 'react'
import Header from '@/component/header/Header'
import Banner from '@/component/banner/Banner'
import GlobalPresence from '@/component/globalPresence/GlobalPresence'
import ProcessTimeline from '@/component/processTimeline/ProcessTimeline'
import ContactCta from '@/component/contactCta/ContactCta'
import Industries from '@/component/industries/Industries';
import WhyChooseUs from '@/component/whyChooseUs/WhyChooseUs';
import RecruiterServices from '@/component/recruiterServices/RecruiterServices';
import Faq from '@/component/faq/Faq';
import Footer from '@/component/footer/Footer';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<"candidate" | "employer">("employer");

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Banner activeTab={activeTab} setActiveTab={setActiveTab} />
      <Industries activeTab={activeTab} />
      {activeTab === "candidate" && (
        <>
          
          <ProcessTimeline />
          <Faq variant="candidate" />
        </>
      )}
      {activeTab === "employer" && (
        <>
        <GlobalPresence />
          <WhyChooseUs />
          <RecruiterServices />
          <Faq variant="employer" />
        </>
      )}
      <ContactCta activeTab={activeTab} />
      <Footer activeTab={activeTab} />
    </div>
  )
}
export default HomePage
