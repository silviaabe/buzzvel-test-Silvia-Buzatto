'use client';

import Image from 'next/image';

const images = [
  { src: '/images/Picture (0).png', style: 'top-33 left-11', w: 128, h: 192 },
  { src: '/images/Picture (1).png', style: 'bottom-13 left-0', w: 172, h: 258 },
  { src: '/images/Picture (2).png', style: 'top-8 left-47', w: 128, h: 212 },
  { src: '/images/Picture (3).png', style: 'bottom-44 left-47', w: 128, h: 215 },
  { src: '/images/Picture (4).png', style: 'bottom-0 left-47', w: 128, h: 215 },
  { src: '/images/Picture (5).png', style: 'top-10 right-35', w: 128, h: 171 },
  { src: '/images/Picture (6).png', style: 'bottom-62 right-35', w: 128, h: 172 },
  { src: '/images/Picture (7).png', style: 'bottom-10 right-35', w: 128, h: 192 },
  { src: '/images/Picture (8).png', style: 'top-27 -right-9', w: 160, h: 255 },
  { src: '/images/Picture (9).png', style: 'bottom-27 -right-1', w: 128, h: 165 },
];

export default function MeetStudentsTeachers() {
  return (
    <section className="w-full h-[811px] bg-white py-20 px-20">
      <div className='relative grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center'>
        {/* LEFT: image grid */}
        <div className="relative w-full h-[600px]">
          {images.map((image, index) => (
            <div key={index} className={`absolute ${image.style}`}>
              <Image src={image.src} alt={`Avatar ${index}`} width={image.w} height={image.h} />
            </div>
          ))}
        </div>

        {/* RIGHT: text content */}
        <div className='relative'>
          <Image src="/images/Plane.png" alt="Plane Icon" width={64} height={64} className="absolute -top-10 right-26 z-50" />
          <span className="font-extrabold text-[56px] leading-tight text-gray-900">Meet international students & teachers</span>
          <p className="text-gray-600 mt-8 mb-8 text-base leading-relaxed">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. 
            Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            Explore teachers and students 
            <Image src="/images/Arrow Blue.png" alt="Arrow Blue" width={14} height={13} className="inline-block ml-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
