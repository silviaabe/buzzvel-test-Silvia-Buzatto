'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="w-full h-[707px] bg-white py-20 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Texto */}
        <div>
          <h2 className="font-extrabold text-[56px] leading-tight text-gray-900">
            An{' '}
            <span className="relative inline-block">
              <Image src="/images/Line.png" alt="Line Icon" width={246} height={12} className="absolute top-11 left-0" />
              <span className="relative z-10 font-extrabold">all-in-one</span>
            </span>{' '}
            app <br/>
            that makes it easier
          </h2>

          <ul className="mt-8 mb-8 space-y-2 text-blue-gray-900 font-normal text-[20px]">
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
              className="inline-flex text-blue-600 font-medium text-[20px] pt-4 pr-2 pb-4 pl-0"
            >
              Find more about the app
            </a>
            <Image src="/images/Arrow Blue.png" alt="Arrow Icon" width={14} height={13} className="inline-block ml-4" />    
          </div>
        </div>

        {/* Imagem e Cards */}
        <div className="relative w-full h-[547px] z-[1]">
          <Image src="/images/Blob.png" alt="Blob img" width={370} height={330} className="absolute top-10 right-75 z-0 rotate-0"
          />
          <Image src="/images/Icons2.png" alt="Bubbles icon" width={130} height={573} className="absolute -top-5 right-135 z-0"
          />

          {/* Imagem com Play */}
          <Image src="/images/Desktop.png" alt="App demo" width={600} height={391} className="absolute top-0 right-0 z-10"
          />

          {/* Cards */}
          <div className="w-158 absolute bottom-0 right-5 flex gap-4 flex-wrap bg-transparent z-10 scale-90">
            <div className="bg-white w-50 p-4 rounded-[10px] shadow-xl">
              <span className="px-2 py-1 font-normal text-[14px] rounded bg-purple-100 text-purple-800 inline-block">
                Featured
              </span>
              <h3 className="font-medium text-[20px] text-blue-gray-900 mt-2 mb-2 leading-tight">
                The map of mathematics
              </h3>
              <p className="font-normal text-[14px] text-blue-gray-600 mb-4">
                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
              </p>
              <button className="w-42 border-2 rounded-lg px-3 py-2 border-blue-600 bg-white text-blue-600 text-[14px] font-medium hover:bg-blue-gray-200 cursor-pointer">
                Take Lesson
              </button>
            </div>
            <div className="bg-white w-50 p-4 rounded-[10px] shadow-xl">
              <span className="px-2 py-1 font-normal text-[14px] rounded bg-blue-100 text-blue-800 inline-block">
                Popular
              </span>
              <h3 className="font-medium text-[20px] text-blue-gray-900 mt-2 mb-2 leading-tight">
                Design for how people think
              </h3>
              <p className="font-normal text-[14px] text-blue-gray-600 mb-4">
                Aliquam ut euismod condimentum elementum ultricies volutpat sit non. 
              </p>
              <button className="w-42 border-2 rounded-lg px-3 py-2 border-blue-600 bg-white text-blue-600 text-[14px] font-medium hover:bg-blue-gray-200 cursor-pointer">
                Take Lesson
              </button>
            </div>
            <div className="bg-white w-50 p-4 rounded-[10px] shadow-xl">
              <span className="px-2 py-1 font-normal text-[14px] rounded bg-green-100 text-green-800 inline-block">
                New
              </span>
              <h3 className="font-medium text-[20px] text-blue-gray-900 mt-2 mb-2 leading-tight">
                International & commercial law
              </h3>
              <p className="font-normal text-[14px] text-blue-gray-600 mb-4">
                Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. 
              </p>
              <button className="w-42 border-2 rounded-lg px-3 py-2 border-blue-600 bg-white text-blue-600 text-[14px] font-medium hover:bg-blue-gray-200 cursor-pointer">
                Take Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
