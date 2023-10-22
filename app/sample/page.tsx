import { ABOUT_SECTION_IMAGE } from '@/assets/images';
import { AboutSection, CoursesSection, HeroSection, ServicesSection } from '@/components/templates';
import GallerySection from '@/components/templates/gallery';
import { OUR_SERVICES } from '@/constants/SERVICES';
import React from 'react';

export const metadata = {
  title: 'Techbysj - Sample page',
  description: 'Sample page for the site',
};

export default function page() {
  return (
    <>
      <HeroSection />

      <AboutSection imageUrl={ABOUT_SECTION_IMAGE} />

      <ServicesSection services={OUR_SERVICES}></ServicesSection>
      <CoursesSection />
      <GallerySection />
    </>
  );
}
