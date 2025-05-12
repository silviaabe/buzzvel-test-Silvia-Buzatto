'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-[847px] px-4 md:px-20 py-12 md:py-20 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-20 gap-x-0 md:gap-x-20 items-center">

        <div className="flex flex-col justify-center w-full">
          <h1 className="font-extrabold text-[40px] md:text-[72px] text-gray-900 leading-tight">
            <span className="relative inline-block">
              <Image src="/images/Line.png" alt="Line Icon" width={190} height={12} className="absolute top-9 md:top-16 left-1" />
              <span className="relative z-10">Teach</span>
            </span>{" "}
            students worldwide
          </h1>

          <p className="mt-6 mb-6 md:mt-8 md:mb-8 font-normal text-[16px] md:text-[24px] text-gray-900">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
          </p>

          <div className="flex flex-nowrap items-center gap-6 md:gap-8 min-w-0">
            <button className="px-7 py-3 md:px-12 md:py-5 bg-orange-600 text-white font-bold rounded-lg border-2 hover:bg-orange-500 transition whitespace-nowrap text-[clamp(0.875rem,2.5vw,1.125rem)] cursor-pointer">
              Sign Up Now
            </button>
            <button className="text-blue-600 flex items-center gap-4 font-medium hover:underline whitespace-nowrap text-[clamp(0.875rem,2.5vw,1.125rem)] cursor-pointer">
              <Image src="/images/Play.png" alt="Play Icon" width={20} height={20} />
              View Demo
            </button>
          </div>

          <div className="mt-8 md:mt-20 text-gray-600 text-sm flex flex-col md:flex-row items-start gap-6 md:gap-12">
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

        <div className="relative w-full min-h-[329px] md:min-h-[625px] flex flex-col justify-center">
          <div className="w-[50vw] md:w-[25vw] absolute bottom-0 left-0 z-10">
            <Image
              src="/images/Teacher.png"
              alt="Teacher Icon"
              layout="responsive"
              width={270}
              height={345}
              className="max-w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-2 md:gap-4 h-[30%] md:max-w-[235px] z-20 absolute top-[0%] md:left-[15%]">
            <div className="self-end bg-white text-gray-900 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] shadow-md text-[12px] md:text-[16px]">
              Nunc, at libero neque
            </div>
            <div className="self-end bg-white text-gray-900 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] shadow-md text-[12px] md:text-[16px]">
              Viverra sed
            </div>
            <div className="bg-gray-700 text-white px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px] text-[12px] md:text-[16px]">
              Turpis platea nunc mattis
            </div>
            <div className="self-start bg-gray-700 text-white px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px] text-[12px] md:text-[16px]">
              Vitae viverra ut non
            </div>
          </div>

          <div className="absolute top-0 right-0 z-10 w-[45vw] md:w-[20vw]">
            <Image
              src="/images/Student.png"
              alt="Student Icon"
              layout="responsive"
              width={250}
              height={348}
              className="max-w-full h-auto"
            />
          </div>
          
          <div className="absolute bottom-[1%] right-[0%] z-10 w-[35vw] sm:w-[12vw] md:w-[10vw] max-w-[159px]">
            <Image
              src="/images/Icons.png"
              alt="Icons"
              layout="intrinsic"
              width={159}
              height={128}
            />
          </div>
        </div>
      </div>
    </section>

  );
}
