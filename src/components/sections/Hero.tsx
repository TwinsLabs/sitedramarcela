'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  page: string;
}

const Hero = ({ page }: HeroProps) => {
  const { pageContent, isLoading } = useContent();

  if (isLoading) {
    return (
      <div className="bg-[#E5DDD4] py-16 md:py-24">Carregando...</div>
    );
  }

  const content = pageContent[page] || {};
  const title = content['hero-title'] || 'Dra. Marcella Vieira';
  const subtitle =
    content['hero-subtitle'] ||
    'Médica do Trabalho especializada em perícias médicas e consultoria em saúde ocupacional.';

  return (
    <section className="bg-[#E5DDD4] py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#394240] mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-[#5C6857] mb-8">
              {subtitle}
            </p>
            <Link href="/contato" className="btn-cta inline-block">
              Solicitar Orçamento
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
              <Image
                src="/images/dramarcela.png"
                alt={title}
                fill
                className="object-contain bg-white rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
