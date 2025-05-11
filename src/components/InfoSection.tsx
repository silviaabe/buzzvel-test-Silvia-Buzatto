'use-client'

import Image from 'next/image';

export default function InfoSection() {
  return (
    <section className="bg-[#0F172A] text-yellow-400 py-20 px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-20 text-center mx-auto">
        <div>
          <Image src="/images/Icon.png" alt="Heart Icon" width={64} height={64} className="mx-auto" />
          <p className="font-bold text-[72px] text-yellow-400">195</p>
          <p className="font-normal text-[24px]">user countries</p>
        </div>

        <div>
          <Image src="/images/Icon (1).png" alt="Heart Icon" width={64} height={64} className="mx-auto" />
          <p className="font-bold text-[72px] text-yellow-400">1M</p>
          <p className="font-normal text-[24px]">valued teachers</p>
        </div>

        <div>
          <Image src="/images/Icon (2).png" alt="Heart Icon" width={64} height={64} className="mx-auto" />
          <p className="font-bold text-[72px] text-yellow-400">17M</p>
          <p className="font-normal text-[24px]">happy students</p>
        </div>

      </div>
    </section>
  );
}
