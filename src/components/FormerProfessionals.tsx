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
    <div className="bg-yellow-400 min-h-[684px] md:min-h-[575px] flex flex-col md:flex-row justify-between items-center py-12 px-4 md:p-20 relative">

      <Image src="/images/Icons3.png" alt="Squares Icon" width={155} height={155} className="absolute -bottom-12 md:bottom-12 left-10 md:left-auto md:right-112 z-50" />
      <Image src="/images/chat-quote.png" alt="Star Icon" width={48} height={48} className="absolute top-70 md:top-4 right-15 md:right-50" />

      <div className="relative md:max-w-auto text-black space-y-4 px-0 md:px-[72px]">
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
          <Image onClick={handlePrev} src="/images/Vector white.png" alt="Ícone esquerdo" width={18} height={31} />
        </div>
        
        <div className="relative w-full">
          {/* Retângulo no fundo */}
          <Image
            src="/images/Rectangle.png"
            alt="Decorativo"
            width={650}
            height={573}
            className="w-full max-w-[650px] md:max-w-[650px] h-auto absolute -bottom-10 md:-top-30 md:-right-15 z-0"
          />

          {/* Conteúdo sobreposto */}
          <div className="relative z-10 w-full h-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Texto */}
            <div className="w-full md:w-1/2 flex flex-col items-start px-4">
              <p className="text-[18px] md:text-[24px] mb-4">{text}</p>
              <p className="text-[18px] md:text-[24px] font-normal">{name},</p>
              <p className="text-[18px] md:text-[24px] font-bold italic">{company}</p>
              <div className="flex gap-2 mt-12 md:mt-4">
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

            {/* Imagem */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={image}
                alt={name}
                width={528}
                height={415}
                className="w-full h-auto max-w-[400px] md:max-w-full"
              />
            </div>
          </div>
        </div>
        

        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
          <Image onClick={handleNext} src="/images/Vector dark.png" alt="Ícone direito" width={18} height={31} />
        </div>
      </div>
    </div>
  );
}
