'use client';

import Image from 'next/image';

export default function InfoSection() {
  return (
    <section className="bg-gray-900 text-yellow-400 py-12 px-4 md:px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center mx-auto">
        <div>
          <Image src="/images/Icon.png" alt="Heart Icon" width={64} height={64} className="mx-auto" />
          <p className="font-bold text-[48px] md:text-[72px] text-yellow-400">195</p>
          <p className="font-normal text-[16px] md:text-[24px]">user countries</p>
        </div>

        <div>
          <Image src="/images/Icon (1).png" alt="Heart Icon" width={64} height={64} className="mx-auto" />
          <p className="font-bold text-[48px] md:text-[72px] text-yellow-400">1M</p>
          <p className="font-normal text-[16px] md:text-[24px]">valued teachers</p>
        </div>

        <div>
          <Image src="/images/Icon (2).png" alt="Heart Icon" width={64} height={64} className="mx-auto" />
          <p className="font-bold text-[48px] md:text-[72px] text-yellow-400">17M</p>
          <p className="font-normal text-[16px] md:text-[24px]">happy students</p>
        </div>
      </div>
    </section>
  );
}
