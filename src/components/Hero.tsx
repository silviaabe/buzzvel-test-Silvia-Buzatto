'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-[707px] px-20 py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          {/* Headline */}
          <h1 className="font-extrabold text-7xl text-blue-gray-900 leading-tight">
            <span className="relative inline-block">
              <Image src="/images/Line.png" alt="Line Icon" width={190} height={12} className="absolute top-16 left-2" />
              <span className="relative z-10">Teach</span>
            </span>{" "}
            students worldwide
          </h1>

          {/* Description */}
          <p className="mt-8 mb-8 font-normal text-2xl text-blue-gray-900">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-8">
            <button className="w-60 h-16 bg-orange-600 text-white text-2xl px-6 py-5 rounded-lg border-2 font-bold leading-6 flex items-center justify-center cursor-pointer hover:bg-orange-400 transition">
              Sign Up Now
            </button>
            <button className="text-blue-600 flex items-center gap-4 font-medium text-xl cursor-pointer hover:underline">
              <Image src="/images/Vector.png" alt="Play Icon" width={20} height={20} />
              View Demo
            </button>
          </div>

          {/* Trusted Logos */}
          <div className="mt-20 text-gray-600 text-base flex gap-12 flex-wrap items-center">
            <p>Trusted by <br/> leading companies</p>
            <Image src="/images/Company1.png" alt="Company 1" width={32} height={32}/>
            <Image src="/images/Company2.png" alt="Company 2" width={32} height={32}/>
            <Image src="/images/Company3.png" alt="Company 3" width={32} height={32}/>
            <Image src="/images/Company4.png" alt="Company 4" width={32} height={32}/>
            <Image src="/images/Company5.png" alt="Company 5" width={32} height={32}/>
          </div>
        </div>

        {/* Right Side (Images + Bubbles) */}
        <div className="relative w-full h-[500px]">
          <div className="absolute bottom-0 -left-10 z-10">
            <Image src="/images/Teacher.png" alt="Teacher Icon" width={270} height={345} /> 
          </div>

          {/* Speech Bubbles */}
          <div className="absolute top-0 right-55 z-10 flex flex-col gap-4">
            <div className="w-fit self-end font-normal text-lg bg-white text-blue-gray-900 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] shadow-md">
              Nunc, at libero neque
            </div>
            <div className="w-fit self-end font-normal text-lg bg-white text-blue-gray-900 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] shadow-md">
              Viverra sed
            </div>
            <div className="w-fit font-normal text-lg bg-gray-700 text-white px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px]">
              Turpis platea nunc mattis
            </div>
            <div className="w-fit font-normal text-lg bg-gray-700 text-white px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px]">
              Vitae viverra ut non
            </div>            
          </div>

          {/* Top Right Image */}
          <div className="absolute top-0 right-0 z-10">
            <Image src="/images/Student.png" alt="Student Icon" width={250} height={348} />   
          </div>

          {/* Logos Image */}
          <div className="absolute top-100 right-25 z-10">
            <Image src="/images/Icons.png" alt="Student Icon" width={159} height={128} />   
          </div>
        </div>
      </div>
    </section>
  );
}
