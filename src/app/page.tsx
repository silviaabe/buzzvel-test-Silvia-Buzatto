'use client';

import Hero2 from '@/components/Hero2';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Section from '@/components/Section';
import Section2 from '@/components/Section2';
//               </summary>
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Hero2 />
      <Testimonials />
      <Section />
      <Section2 />
      {/* <Footer /> */}
    </>
  );
}
