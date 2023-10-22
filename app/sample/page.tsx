import { ABOUT_SECTION_IMAGE } from '@/assets/images';
import { AboutSection, ContactSection, CoursesSection, HeroSection, ServicesSection } from '@/components/templates';
import RegistrationForm from '@/components/templates/course_registration';
import GallerySection from '@/components/templates/gallery';
import { siteConfig } from '@/config/site';
import { OUR_SERVICES } from '@/constants/SERVICES';
import React from 'react';

export const metadata = {
  title: siteConfig.name,
  description: 'Sample page for the site',
};

export default function page() {
  return (
    <>
      <HeroSection />

     <AboutSection imageUrl={ABOUT_SECTION_IMAGE} /> 

      <ServicesSection services={OUR_SERVICES}></ServicesSection>
    
      <GallerySection  title='Our Activities'/>
      <ServicesSection services={OUR_SERVICES}></ServicesSection>
      <CoursesSection />
      <ContactSection />
      
      <section id="booking">
        <RegistrationForm />
      </section>
    </>
    </>
  );
}
