'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

type Testimonial = {
  name: string;
  title: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Hellen Jummy',
    title: 'Financial Counselor',
    text: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    image: '/images/User Thumb.png',
  },
  {
    name: 'Ralph Edwards',
    title: 'Math Teacher',
    text: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.',
    image: '/images/User Thumb (1).png',
  },
  {
    name: 'Helena John',
    title: 'Psychology Student',
    text: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a cras aliquam.',
    image: '/images/User Thumb (2).png',
  },
  {
    name: 'Hellen Jummy',
    title: 'Financial Counselor',
    text: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    image: '/images/User Thumb.png',
  },
  {
    name: 'Ralph Edwards',
    title: 'Math Teacher',
    text: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.',
    image: '/images/User Thumb (1).png',
  },
  {
    name: 'Helena John',
    title: 'Psychology Student',
    text: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a cras aliquam.',
    image: '/images/User Thumb (2).png',
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="max-w-7xl px-4 md:px-20 py-12 md:py-20" >
      <div className='flex items-center justify-between mb-8 md:mb-20'>
        <h2 className="font-extrabold text-[24px] md:text-[56px] text-gray-900">What everyone says</h2>
        {/* Navigation Arrows */}
        <div className="hidden md:flex gap-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white border border-orange-600 hover:bg-orange-100 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-orange-600" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white border border-orange-600 hover:bg-orange-100 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-orange-600" />
          </button>
        </div>
      </div>

      <div className="relative hidden md:block">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.slice(index, index + 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md transition hover:shadow-lg"
              >
                <p className="text-black font-normal text-[18px]">{item.text}</p>
                <div className="flex items-center gap-3 mt-8">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                  />
                  <div className='ml-4'>
                    <p className="font-normal text-[18px] text-black">{item.name}</p>
                    <p className="font-normal text-[16px] text-gray-600">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative md:hidden overflow-x-auto no-scrollbar px-0">
        <div className="flex gap-4 w-max pr-12 mb-2">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="w-[70vw] flex-shrink-0 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <p className="text-black font-normal text-[16px]">{item.text}</p>
              <div className="flex items-center gap-3 mt-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className='ml-2'>
                  <p className="font-normal text-[16px] text-black">{item.name}</p>
                  <p className="font-normal text-[14px] text-gray-600">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
