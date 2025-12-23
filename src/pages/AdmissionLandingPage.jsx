import React, { useRef } from 'react'
import HeroSection from '../components/01-HeroSection/HeroSection'
import ServicesSection from '../components/02-ServicesSection/ServicesSection'
import TrustPilotSection from '../components/03-TrustPilotSection/TrustPilotSection'
import TestimonialSection from '../components/06-TestimonialsSection/TestimonialSection'
import CTAFormSection from '../components/07-CTAFormSection/CTAFormSection'
import Footer from '../components/08-FooterSection/Footer'
import MinimalistHeader from '../components/MinimalistHeader'
import Updates from '../components/04-UpdatesSection/Updates'
import Courses from '../components/05-CoursesSection/Courses'

const AdmissionLandingPage = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full h-full overflow-hidden ' >
      {/* Headder */}
      {/* <MinimalistHeader /> */}

      {/* page sections in logical flow */}
      <HeroSection />
      <ServicesSection />
      <TrustPilotSection />
      <Updates />
      <Courses scrollToForm={scrollToForm} />
      <TestimonialSection />
      <CTAFormSection ref={formRef} />

      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default AdmissionLandingPage