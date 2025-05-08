'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-20 py-12 md:py-20 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 sm:gap-y-16 md:gap-y-20 gap-x-0 md:gap-x-20 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          {/* Headline */}
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-gray-900 leading-tight">
            <span className="relative inline-block">
              <Image src="/images/Line.png" alt="Line Icon" width={190} height={12} className="absolute top-10 sm:top-15 left-2" />
              <span className="relative z-10">Teach</span>
            </span>{" "}
            students worldwide
          </h1>

          {/* Description */}
          <p className="mt-6 mb-8 sm:mt-6 sm:mb-8 mobile:mt-[24px] mobile:mb-[24px] font-normal text-lg sm:text-xl md:text-2xl text-blue-gray-900">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
          </p>

          {/* Buttons */}
          <div className="flex flex-nowrap items-center gap-6 min-w-0">
            <button className="px-6 py-4 bg-orange-600 text-white font-bold rounded-lg border-2 hover:bg-orange-500 transition whitespace-nowrap text-[clamp(0.875rem,2.5vw,1.125rem)]">
              Sign Up Now
            </button>
            <button className="text-blue-600 flex items-center gap-3 font-medium hover:underline whitespace-nowrap text-[clamp(0.875rem,2.5vw,1.125rem)]">
              <Image src="/images/Vector.png" alt="Play Icon" width={20} height={20} />
              View Demo
            </button>
          </div>

          {/* Trusted Logos */}
          <div className="mt-12 sm:mt-16 mobile:mt-[32px] text-gray-600 text-sm sm:text-base flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-12">
            <p className="min-w-[120px]">Trusted by <br /> leading companies</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
              <Image src="/images/Company1.png" alt="Company 1" width={32} height={32} />
              <Image src="/images/Company2.png" alt="Company 2" width={32} height={32} />
              <Image src="/images/Company3.png" alt="Company 3" width={32} height={32} />
              <Image src="/images/Company4.png" alt="Company 4" width={32} height={32} />
              <Image src="/images/Company5.png" alt="Company 5" width={32} height={32} />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-[329px] sm:h-[400px] md:h-[500px]">
          {/* Left Image */}
          <div className="absolute bottom-0 left-0 z-10 w-[150px] sm:w-[200px] md:w-[250px]">
            <Image
              src="/images/Teacher.png"
              alt="Teacher Icon"
              layout="responsive"
              width={270}
              height={345}
            />
          </div>

          {/* Speech Bubbles */}
          <div className="absolute top-6 left-[10%] sm:left-[25%] z-20 flex flex-col gap-2 sm:gap-4 max-w-[70%] sm:max-w-[60%]">
            <div className="self-end bg-white text-blue-gray-900 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] shadow-md text-xs sm:text-sm">
              Nunc, at libero neque
            </div>
            <div className="self-end bg-white text-blue-gray-900 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] shadow-md text-xs sm:text-sm">
              Viverra sed
            </div>
            <div className="bg-gray-700 text-white px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px] text-xs sm:text-sm">
              Turpis platea nunc mattis
            </div>
            <div className="self-start bg-gray-700 text-white px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px] text-xs sm:text-sm">
              Vitae viverra ut non
            </div>            
          </div>

          {/* Right Image */}
          <div className="absolute top-6 right-0 z-10 w-[140px] sm:w-[180px] md:w-[220px]">
            <Image
              src="/images/Student.png"
              alt="Student Icon"
              layout="responsive"
              width={250}
              height={348}
            />
          </div>

          {/* Logos Image */}
          <div className="absolute bottom-[1%] right-[10%] z-10 w-[100px] sm:w-[140px] md:w-[159px]">
            <Image
              src="/images/Icons.png"
              alt="Icons"
              layout="responsive"
              width={159}
              height={128}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
