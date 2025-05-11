'use client';

import { useState } from 'react';
import Image from 'next/image';

const comments = [
  {
    text: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis pharetra. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
    name: 'Marie Poirot',
    company: 'Bigapp',
    image: '/images/Picture.png', 
  },
  {
    text: 'Id bibendum, risus non, facilisis lorem. Elit pulvinar arcu nunc in ut. Aenean pharetra, odio at sagittis fermentum, erat arcu gravida neque, vitae tempor mi magna sed sapien. Vel convallis ac ultrices id neque. Et imperdiet tellus vestibulum non.',
    name: 'Marie Poirot',
    company: 'Bigapp',
    image: '/images/Picture.png', 
  },
  {
    text: 'Fusce porta, erat vel eleifend dictum, justo mi euismod quam, ut blandit lectus nulla sed nulla. Praesent sed metus vitae justo tincidunt dapibus. Enim at curabitur et tincidunt. Integer congue, purus in metus est lacinia justo.',
    name: 'Marie Poirot',
    company: 'Bigapp',
    image: '/images/Picture.png', 
  },
];

export default function FormerProfessionals() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % comments.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + comments.length) % comments.length);

  const { text, name, company, image } = comments[index];

  return (
    <div className="bg-[#FFD400] h-[575px] flex flex-col md:flex-row justify-between items-center p-20 relative">

      <Image src="/images/Icons3.png" alt="Star Icon" width={155} height={155} className="absolute bottom-12 right-125 z-50" />
      <Image src="/images/chat-quote.png" alt="Star Icon" width={48} height={48} className="absolute top-4 right-50" />

      <div className="relative max-w-auto text-black space-y-4 px-[72px]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Image onClick={handlePrev} src="/images/Vector white.png" alt="Ícone esquerdo" width={18} height={31} />
        </div>
        
        <div className="relative w-full">
          {/* Retângulo no fundo */}
          <Image
            src="/images/Rectangle.png"
            alt="Decorativo"
            width={650}
            height={573}
            className="absolute -top-30 -right-15 z-0"
          />

          {/* Conteúdo sobreposto */}
          <div className="relative z-10 w-auto h-auto flex flex-col md:flex-row items-center gap-20">
            <div className="w-auto h-auto flex flex-col items-start">
              <p className="text-[24px] mb-4">{text}</p>
              <p className="text-[24px] font-normal">{name},</p>
              <p className="text-[24px] font-bold italic">{company}</p>
              <div className="flex gap-2 mt-4">
                {comments.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition ${
                      i === index ? "bg-black" : "border border-black bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
            <Image src={image} alt={name} width={528} height={415} />
          </div>
        </div>
        

        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Image onClick={handleNext} src="/images/Vector dark.png" alt="Ícone direito" width={18} height={31} />
        </div>
      </div>
    </div>
  );
}
