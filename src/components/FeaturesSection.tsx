'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="w-full h-[1124px] md:h-auto bg-white py-12 px-4 md:py-20 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-center">
        <div>
          <h2 className="font-extrabold text-[24px] md:text-[56px] leading-tight text-gray-900">
            An{' '}
            <span className="relative inline-block">
              <Image src="/images/Line.png" alt="Line Icon" width={246} height={12} className="absolute top-5 md:top-12 md:left-0" />
              <span className="relative z-10 font-extrabold">all-in-one</span>
            </span>{' '}
            app that makes it easier
          </h2>

          <p className="mt-6 font-normal text-[16px] block md:hidden">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>

          <ul className="mt-8 mb-8 space-y-2 text-gray-900 font-normal text-[20px]">
            <li>
              <Image src="/images/Check.png" alt="Check Icon" width={14} height={9} className="inline-block mr-2" />
              Est et in pharetra magna adipiscing ornare aliquam.</li>
            <li>
              <Image src="/images/Check.png" alt="Check Icon" width={14} height={9} className="inline-block mr-2" />
              Tellus arcu sed consequat ac velit ut eu blandit.</li>
            <li>
              <Image src="/images/Check.png" alt="Check Icon" width={14} height={9} className="inline-block mr-2" />
              Ullamcorper ornare in et egestas dolor orci.</li>
          </ul>

          <div className='w-69 hover:underline cursor-pointer'>
            <a
              href="#"
              className="inline-flex text-blue-600 font-medium text-[16px] md:text-[20px] md:pt-4 md:pr-2 md:pb-4 pl-0"
            >
              Find more about the app
            </a>
            <Image src="/images/Arrow Blue.png" alt="Arrow Icon" width={14} height={13} className="inline-block ml-4" />    
          </div>
        </div>

        <div className="relative w-full h-[472px] md:h-[547px] z-[1]">
          <Image src="/images/Blob.png" alt="Blob img" width={370} height={330} className="absolute md:top-10 right-20 md:right-75 z-0 rotate-10 md:rotate-0"
          />
          <Image src="/images/Icons2.png" alt="Bubbles icon" width={130} height={573} className="absolute -top-45 md:-top-5 md:right-135 right-25 z-0"
          />

          <Image src="/images/Desktop.png" alt="App demo" width={600} height={391} className="hidden md:block absolute top-0 right-0 z-10"
          />
          <Image src="/images/Desktop2.png" alt="App demo" width={600} height={391} className="block md:hidden absolute top-0 right-0 z-10"
          />

          <div className="min-w-158 absolute bottom-0 -right-10 md:right-5 flex gap-4 flex-wrap bg-transparent z-10 scale-90">
            <div className="bg-white w-50 p-4 rounded-[10px] shadow-xl">
              <span className="px-2 py-1 font-normal text-[14px] rounded bg-purple-100 text-purple-800 inline-block">
                Featured
              </span>
              <h3 className="font-medium text-[20px] text-gray-900 mt-2 mb-2 leading-tight">
                The map of mathematics
              </h3>
              <p className="font-normal text-[14px] text-gray-600 mb-4">
                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
              </p>
              <button className="w-42 border-2 rounded-lg px-3 py-2 border-blue-600 bg-white text-blue-600 text-[14px] font-medium hover:bg-gray-200 cursor-pointer">
                Take Lesson
              </button>
            </div>
            <div className="bg-white w-50 p-4 rounded-[10px] shadow-xl">
              <span className="px-2 py-1 font-normal text-[14px] rounded bg-blue-100 text-blue-800 inline-block">
                Popular
              </span>
              <h3 className="font-medium text-[20px] text-gray-900 mt-2 mb-2 leading-tight">
                Design for how people think
              </h3>
              <p className="font-normal text-[14px] text-gray-600 mb-4">
                Aliquam ut euismod condimentum elementum ultricies volutpat sit non. 
              </p>
              <button className="w-42 border-2 rounded-lg px-3 py-2 border-blue-600 bg-white text-blue-600 text-[14px] font-medium hover:bg-gray-200 cursor-pointer">
                Take Lesson
              </button>
            </div>
            <div className="bg-white w-50 p-4 rounded-[10px] shadow-xl">
              <span className="px-2 py-1 font-normal text-[14px] rounded bg-green-100 text-green-800 inline-block">
                New
              </span>
              <h3 className="font-medium text-[20px] text-gray-900 mt-2 mb-2 leading-tight">
                International & commercial law
              </h3>
              <p className="font-normal text-[14px] text-gray-600 mb-4">
                Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. 
              </p>
              <button className="w-42 border-2 rounded-lg px-3 py-2 border-blue-600 bg-white text-blue-600 text-[14px] font-medium hover:bg-gray-200 cursor-pointer">
                Take Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
