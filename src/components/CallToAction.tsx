'use client';

import Image from 'next/image';

const avatars = [
  { src: '/images/User Thumb Left (1).png', style: 'top-22 left-94', size: 64 },
  { src: '/images/User Thumb Left (2).png', style: 'bottom-24 left-93', size: 32 },
  { src: '/images/User Thumb Left (3).png', style: 'bottom-15 left-4', size: 48 },
  { src: '/images/User Thumb Left (4).png', style: 'bottom-54 left-44', size: 128 },
  { src: '/images/User Thumb Left (5).png', style: 'bottom-77 left-0', size: 96 },
  { src: '/images/User Thumb Left (6).png', style: 'bottom-89 left-86', size: 48 },
  { src: '/images/User Thumb Left (7).png', style: 'top-68 left-56', size: 64 },
  { src: '/images/User Thumb Left (8).png', style: 'top-52 left-10', size: 48 },
  { src: '/images/Icon Container Left (1).png', style: 'bottom-50 left-14', size: 48 },
  { src: '/images/Icon Container Left (2).png', style: 'top-55 left-87', size: 32 },
  { src: '/images/Icon Container Left (3).png', style: 'top-36 left-38', size: 48 },
  { src: '/images/Icon Container Left (4).png', style: 'bottom-37 left-81', size: 56 },
  { src: '/images/Icon Container Left (5).png', style: 'top-21 left-3', size: 48 },
  { src: '/images/Icon Container Left (6).png', style: 'top-96 left-32', size: 24 },
  { src: '/images/User Thumb Right (1).png', style: 'top-19 right-4', size: 96 },
  { src: '/images/User Thumb Right (2).png', style: 'bottom-26 right-16', size: 32 },
  { src: '/images/User Thumb Right (3).png', style: 'bottom-33 right-94', size: 48 },
  { src: '/images/User Thumb Right (4).png', style: 'bottom-64 right-0', size: 128 },
  { src: '/images/User Thumb Right (5).png', style: 'top-75 right-42', size: 64 },
  { src: '/images/User Thumb Right (6).png', style: 'top-30 right-90', size: 56 },
  { src: '/images/Icon Container Right (1).png', style: 'bottom-36 right-53', size: 32 },
  { src: '/images/Icon Container Right (2).png', style: 'bottom-70 right-40', size: 48 },
  { src: '/images/Icon Container Right (3).png', style: 'top-62 right-13', size: 48 },
  { src: '/images/Icon Container Right (4).png', style: 'top-71 right-72', size: 64 },
  { src: '/images/Icon Container Right (5).png', style: 'top-39 right-50', size: 48 },
];

export default function CallToAction() {
  return (
    <section className="relative bg-yellow-400 text-center py-64 overflow-hidden">
      {/* Avatares flutuantes */}
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`absolute ${avatar.style}`}
        >
          <Image src={avatar.src} alt={`Avatar ${index}`} width={avatar.size || 48} height={avatar.size || 48} />
        </div>
      ))}

      {/* Conteúdo principal */}
      <div className="relative z-10 px-4 md:px-20">
        <h2 className="font-extrabold text-[24px] md:text-[56px] leading-tight text-gray-900">Join a world of learning</h2>
        <p className="mt-6 md:mt-8 mb-6 md:mb-8 space-y-2 text-blue-gray-900 font-normal leading-loose text-[16px] md:text-[20px]">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <br />
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white text-[20px] md:text-[24px] font-bold py-4 md:py-5 px-8 md:px-12 rounded-lg transition cursor-pointer">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}
