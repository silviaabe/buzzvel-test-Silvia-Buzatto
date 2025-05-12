'use client';

import Image from 'next/image';

export default function FeatureHighlight() {
  return (
    <section className="w-full h-[639px] md:h-auto bg-white py-12 px-4 md:p-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[80px] items-center">
        <div>
          <h2 className="font-extrabold text-[24px] md:text-[56px] leading-tight text-gray-900">
            All the cool{' '}
            <span className="relative inline-block">
              <Image src="/images/Line.png" alt="Line Icon" width={205} height={12} className="absolute top-5 md:top-12 md:left-0" />
              <span className="relative z-10 font-extrabold">features</span>
            </span>
          </h2>

          <p className="mt-6 md:mt-8 mb-6 md:mb-8 space-y-2 text-gray-900 font-normal text-[16px] md:text-[20px]">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu
            donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper.
          </p>
          <div className="w-69 hover:underline cursor-pointer">
            <a
              href="#"
              className="inline-flex text-blue-600 font-medium text-[16px] md:text-[20px] md:pt-4 md:pr-2 md:pb-4 pl-0"
            >
              View all the features
            </a>
            <Image src="/images/Arrow Blue.png" alt="Arrow Icon" width={14} height={13} className="inline-block ml-4" />
          </div>
        </div>

        <div className='relative'>
          <Image
            src="/images/Blob (1).png"
            alt="Blob img"
            width={480}
            height={468}
            className="absolute -top-5 right-5 z-0 -rotate-1"
          />
          <Image
            src="/images/Icons4.png"
            alt="Bubbles icon"
            width={231}
            height={529}
            className="absolute -top-10 right-[130px] z-1"
          />
          <Image
            src="/images/User Thumb (3).png"
            alt="Thumb 2"
            width={100}
            height={100}
            className="absolute top-30 md:top-25 -right-10 md:right-10 z-20"
          />

          <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-4"> 
            <div className="z-5 bg-white w-50 p-4 rounded-[10px] shadow-xl scale-80">
              <span className="px-2 py-1 font-normal text-[14px] rounded bg-blue-100 text-blue-800 inline-block">
                Popular
              </span>
              <h3 className="font-medium text-[20px] text-gray-900 mt-2 mb-2 leading-tight">
                Design for how people think
              </h3>
              <p className="font-normal text-[14px] text-gray-600 mb-4">
                Aliquam et ultrices elementum ultrices.
              </p>
              <button className="w-42 border-2 rounded-lg px-3 py-2 border-blue-600 bg-white text-blue-600 text-[14px] font-medium hover:bg-gray-200 cursor-pointer">
                Take Lesson
              </button>
            </div>

            <div className="relative">
              <Image
                src="/images/Picture (11).png"
                alt="Thumb 2"
                width={186}
                height={158}
                className='z-5 absolute left-0 bottom-0'
              />
            </div>
          </div>

          <div className="relative grid grid-cols-2 grid-rows-1 gap-4 z-10"> 
            <div className="w-full flex items-start">
              <Image
                src="/images/Picture (10).png"
                alt="Thumb 1"
                width={304}
                height={179}
              />
            </div>

            <div className="flex items-start">
              <Image
                src="/images/Picture (12).png"
                alt="Thumb 3"
                width={232}
                height={179}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
