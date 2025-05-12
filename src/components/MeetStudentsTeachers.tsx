'use client';

import Image from 'next/image';

export default function MeetStudentsTeachers() {
  return (
    <section className="w-full h-auto bg-white py-12 md:py-20 px-4 md:px-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center">
        
        <div className="order-2 md:order-1 grid grid-cols-4 gap-x-4 gap-y-4">
          <div className="flex flex-col items-center gap-4 mt-33">
            <Image src="/images/Picture (0).png" alt="1" width={128} height={192} />
            <Image src="/images/Picture (1).png" alt="2" width={172} height={258} />
          </div>

          <div className="flex flex-col items-center gap-4 mt-6">
            <Image src="/images/Picture (2).png" alt="3" width={128} height={212} />
            <Image src="/images/Picture (3).png" alt="4" width={128} height={215} />
            <Image src="/images/Picture (4).png" alt="5" width={128} height={160} />
          </div>

          <div className="flex flex-col items-center gap-4 mt-10">
            <Image src="/images/Picture (5).png" alt="6" width={128} height={171} />
            <Image src="/images/Picture (6).png" alt="7" width={128} height={172} />
            <Image src="/images/Picture (7).png" alt="8" width={128} height={192} />
          </div>

          <div className="flex flex-col items-center gap-4 mt-25">
            <Image src="/images/Picture (8).png" alt="9" width={160} height={255} />
            <Image src="/images/Picture (9).png" alt="10" width={128} height={165} />
          </div>
        </div>

        <div className="order-1 md:order-2 relative inline-block">
          <Image src="/images/Plane.png" alt="Plane Icon" width={64} height={64} className="absolute -top-4 right-42 md:-top-10 md:right-26 w-6 h-6 md:w-16 md:h-16 z-50"/>
          <h2 className="font-extrabold text-[24px] md:text-[56px] leading-tight text-gray-900">
            Meet international students & teachers
          </h2>
          <p className="text-gray-600 mt-6 md:mt-8 mb-6 md:mb-8 text-[16px] md:text-[20px] leading-relaxed">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <a href="#" className="inline-flex items-center text-[16px] md:text-[24px] gap-2 text-blue-600 font-semibold hover:underline">
            Explore teachers and students 
            <Image src="/images/Arrow Blue.png" alt="Arrow Blue" width={14} height={13} />
          </a>
        </div>
      </div>
    </section>

  );
}
