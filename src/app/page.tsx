'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import FormerProfessionals from '@/components/FormerProfessionals';
import MeetStudentsTeachers from '@/components/MeetStudentsTeachers';
import InfoSection from '@/components/InfoSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FeatureHighlight from '@/components/FeatureHighlight';
import CallToAction from '@/components/CallToAction';
import RequestForm from '@/components/RequestForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <FormerProfessionals />
      <MeetStudentsTeachers />
      <InfoSection />
      <TestimonialCarousel />
      <FeatureHighlight />
      <CallToAction />
      <RequestForm />
      <Footer />
    </>
  );
}
