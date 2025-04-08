'use client';

import React, { useEffect, useRef } from 'react';
import { useContent } from '@/lib/contentContext';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaUserMd,
  FaShieldAlt,
  FaFileAlt,
  FaLongArrowAltRight,
} from 'react-icons/fa';

interface HeroProps {
  page: string;
}

const Hero = ({ page }: HeroProps) => {
  const { pageContent, isLoading } = useContent();
  const imageRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

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

    // Animação em estágios para os ícones de recursos
    if (iconsRef.current) {
      const iconElements =
        iconsRef.current.querySelectorAll('.feature-item');
      iconElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100');
          el.classList.remove('opacity-0', 'translate-y-4');
        }, 1000 + index * 200); // Delay crescente para cada ícone
      });
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  if (isLoading) {
    return (
      <div className="hero-gradient-bg py-16 md:py-24">
        Carregando...
      </div>
    );
  }

  const content = pageContent[page] || {};
  const title = content['hero-title'] || 'Dra. Marcella Vieira';
  const subtitle =
    content['hero-subtitle'] ||
    'Médica do Trabalho especializada em perícias médicas e consultoria em saúde ocupacional.';

  return (
    <section className="hero-gradient-bg py-16 md:py-28 relative overflow-hidden subtle-pattern">
      {/* Elementos decorativos em camadas */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#5C6857] opacity-[0.02] z-0"></div>
      <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#5C6857] to-transparent opacity-[0.03] z-0"></div>

      {/* Formas geométricas decorativas */}
      <div className="absolute top-[-80px] right-[20%] w-[200px] h-[200px] rounded-full border-4 border-[#5C6857] border-opacity-5 animate-subtle-rotate"></div>
      <div className="absolute bottom-[-150px] left-[-150px] w-[350px] h-[350px] bg-[#5C6857] rounded-full opacity-[0.07]"></div>
      <div className="absolute top-[30%] right-[10%] w-[15px] h-[15px] bg-[#5C6857] rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-[20%] left-[15%] w-[10px] h-[10px] bg-[#A5776C] rounded-full opacity-30 animate-float-reverse"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-on-scroll opacity-0 translate-y-4 transition duration-1000 ease-out">
            {/* Badge de credenciais */}
            <div
              className="mb-6 animate-fade-in-right"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="credentials-badge">
                Médica do Trabalho | CRM 80479 | RQE 61114
              </span>
            </div>

            {/* Texto de boas-vindas mais específico com tipografia secundária */}
            <p
              className="font-secondary text-[#5C6857] font-medium mb-2 tracking-widest uppercase text-sm animate-fade-in"
              style={{
                animationDelay: '0.5s',
                letterSpacing: '0.15em',
              }}
            >
              EXCELÊNCIA EM SAÚDE OCUPACIONAL
            </p>

            {/* Título com tipografia destacada */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#394240] mb-4 leading-tight">
              {title}
            </h1>

            {/* Subtítulo com fonte secundária para maior destaque */}
            <p className="font-secondary text-lg md:text-xl text-[#5C6857] mb-8 font-light leading-relaxed max-w-lg">
              <span className="subtitle-emphasis">
                {subtitle.split(' ').slice(0, 3).join(' ')}{' '}
              </span>
              {subtitle.split(' ').slice(3).join(' ')}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Link
                href="/contato"
                className="btn-cta-premium btn-shine inline-flex items-center hover:scale-105 transition-transform shadow-lg animate-subtle-pulse"
                style={{
                  animation:
                    'fadeInUp 1.2s ease-out forwards, subtlePulse 5s infinite ease-in-out 2s',
                  opacity: 0,
                  transform: 'translateY(20px)',
                }}
              >
                Solicitar Orçamento
                <FaLongArrowAltRight className="ml-2" />
              </Link>

              {/* Texto adicional abaixo do botão com tipografia secundária */}
              <p className="font-secondary text-sm text-[#5C6857] italic opacity-80">
                Atendimento personalizado para sua empresa
              </p>
            </div>

            {/* Miniícones representando as áreas de atuação - com animação em estágios */}
            <div className="flex gap-6 mt-10" ref={iconsRef}>
              <div className="feature-item opacity-0 translate-y-4 transition duration-700 ease-out flex flex-col items-center">
                <div className="feature-icon-wrapper">
                  <FaUserMd className="feature-icon text-[#5C6857] text-xl" />
                </div>
                <span className="font-secondary text-xs text-center text-[#394240] font-medium">
                  Atendimento
                  <br />
                  Especializado
                </span>
              </div>

              <div className="feature-item opacity-0 translate-y-4 transition duration-700 ease-out flex flex-col items-center">
                <div className="feature-icon-wrapper">
                  <FaShieldAlt className="feature-icon text-[#5C6857] text-xl" />
                </div>
                <span className="font-secondary text-xs text-center text-[#394240] font-medium">
                  Segurança
                  <br />
                  Ocupacional
                </span>
              </div>

              <div className="feature-item opacity-0 translate-y-4 transition duration-700 ease-out flex flex-col items-center">
                <div className="feature-icon-wrapper">
                  <FaFileAlt className="feature-icon text-[#5C6857] text-xl" />
                </div>
                <span className="font-secondary text-xs text-center text-[#394240] font-medium">
                  Laudos
                  <br />
                  Especializados
                </span>
              </div>
            </div>
          </div>
          <div
            className="order-1 md:order-2 flex justify-center relative animate-on-scroll opacity-0 translate-y-4 transition duration-1000 delay-300 ease-out"
            ref={imageRef}
          >
            {/* Círculo decorativo azul claro */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#87CEEB] opacity-20 z-0 right-[-50px] animate-pulse-slow" />

            {/* Forma decorativa azul escuro */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#4682B4] opacity-20 z-0 bottom-[-30px] right-[-30px] animate-float" />

            {/* Moldura para o retrato - destaque visual */}
            <div className="portrait-frame w-full max-w-xl h-[450px] md:h-[600px] z-10">
              {/* Luz de fundo sutil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5C6857] via-transparent to-transparent opacity-10 z-0"></div>

              <Image
                src="/images/medica.png"
                alt={title}
                fill
                className="object-contain"
                priority
                style={{
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

              {/* Elemento de destaque sobre a imagem */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-[100px] opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
