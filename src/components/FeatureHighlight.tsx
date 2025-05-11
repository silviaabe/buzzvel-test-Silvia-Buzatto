'use client';

import Image from 'next/image';

export default function FeatureHighlight() {
  return (
    <section className="w-full h-[639px] bg-white py-20 px-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
        
        {/* Texto */}
        <div>
          <h2 className="font-extrabold text-[56px] leading-tight text-gray-900">
            All the cool{' '}
            <span className="relative inline-block">
              <Image src="/images/Line.png" alt="Line Icon" width={205} height={12} className="absolute top-10 left-5" />
            </span>
            <span className="relative z-10 font-extrabold">features</span>
          </h2>

          <p className="mt-8 mb-8 space-y-2 text-blue-gray-900 font-normal text-[20px]">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu
            donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper.
          </p>
          <div className="w-69 hover:underline cursor-pointer">
            <a
              href="#"
              className="inline-flex text-blue-600 font-medium text-[20px] pt-4 pr-2 pb-4 pl-0"
            >
              View all the features
            </a>
            <Image src="/images/Vector3.png" alt="Arrow Icon" width={14} height={13} className="inline-block ml-4" />
          </div>
        </div>

        {/* Container relativo para as imagens e o fundo */}
        <div className="relative w-full h-[479px] z-[1]">
          {/* Blob (fundo) */}
          <Image
            src="/images/Blob (1).png"
            alt="Blob img"
            width={480}
            height={468}
            className="absolute -top-10 right-15 z-[-1] -rotate-1"
          />
          {/* Ícones na frente do blob, mas atrás dos cards */}
          <Image
            src="/images/Icons4.png"
            alt="Bubbles icon"
            width={231}
            height={529}
            className="absolute -top-10 right-[130px] z-[-1]"
          />

          {/* Card principal */}
          <div className="absolute top-0 left-10">
            <div className="bg-white w-50 p-4 rounded-[10px] shadow-xl">
              <span className="px-2 py-1 font-normal text-[14px] rounded bg-blue-100 text-blue-800 inline-block">
                Popular
              </span>
              <h3 className="font-medium text-[20px] text-blue-gray-900 mt-2 mb-2 leading-tight">
                Design for how people think
              </h3>
              <p className="font-normal text-[14px] text-blue-gray-600 mb-4">
                Aliquam et ultrices elementum ultrices.
              </p>
              <button className="w-42 border-2 rounded-lg px-3 py-2 border-blue-600 bg-white text-blue-600 text-[14px] font-medium hover:bg-blue-gray-200 cursor-pointer">
                Take Lesson
              </button>
            </div>
          </div>

          {/* Imagens menores */}
          <div className="absolute left-6 bottom-11">
            <Image
              src="/images/Picture (10).png"
              alt="Thumb 1"
              width={304}
              height={179}
            />
          </div>
          <div className="absolute top-22 right-30">
            <Image
              src="/images/Picture (11).png"
              alt="Thumb 2"
              width={186}
              height={158}
            />
          </div>
          <div className="absolute bottom-11 right-0">
            <Image
              src="/images/Picture (12).png"
              alt="Thumb 3"
              width={232}
              height={179}
            />
          </div>
          <div className="absolute top-35 right-21 z-[999]">
            <Image
              src="/images/User Thumb (3).png"
              alt="Thumb 2"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
