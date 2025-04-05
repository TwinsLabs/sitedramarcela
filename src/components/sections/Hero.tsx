'use client';

import React, { useEffect, useRef } from 'react';
import { useContent } from '@/lib/contentContext';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  page: string;
}

const Hero = ({ page }: HeroProps) => {
  const { pageContent, isLoading } = useContent();
  const circleRef = useRef<HTMLDivElement>(null);

  // Animação suave ao carregar a página
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              'opacity-100',
              'translate-y-0'
            );
            entry.target.classList.remove(
              'opacity-0',
              'translate-y-4'
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
    <section className="bg-[#E5DDD4] py-16 md:py-24 relative overflow-hidden">
      {/* Formas decorativas */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#E5DDD4] rounded-full opacity-40" />
      <div className="absolute bottom-[-150px] left-[-150px] w-[300px] h-[300px] bg-[#5C6857] rounded-full opacity-10" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-on-scroll opacity-0 translate-y-4 transition duration-1000 ease-out">
            <p className="text-[#5C6857] font-medium mb-2 tracking-wider uppercase text-sm">
              SEJA BEM-VINDO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#394240] mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-[#5C6857] mb-8">
              {subtitle}
            </p>
            <Link
              href="/contato"
              className="btn-cta inline-block hover:scale-105 transition-transform animate-fade-in-up"
              style={{
                animation: 'fadeInUp 1.2s ease-out forwards',
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              Solicitar Orçamento
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center relative animate-on-scroll opacity-0 translate-y-4 transition duration-1000 delay-300 ease-out">
            {/* Círculo decorativo azul claro */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full bg-[#87CEEB] opacity-20 z-0 right-[-50px] animate-pulse-slow"
              ref={circleRef}
            />

            {/* Forma decorativa azul escuro */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#4682B4] opacity-20 z-0 bottom-[-30px] right-[-30px] animate-float" />

            <div className="relative w-full max-w-xl h-[450px] md:h-[600px] z-10 animate-fade-in">
              <Image
                src="/images/dramarcela.png"
                alt={title}
                fill
                className="object-contain rounded-lg"
                priority
                style={{
                  filter:
                    'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1))',
                  transition: 'transform 0.5s ease-in-out',
                  animation:
                    'fadeIn 1.5s ease-out forwards, slideIn 1.5s ease-out forwards',
                  opacity: 0,
                  transform: 'translateX(20px)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
