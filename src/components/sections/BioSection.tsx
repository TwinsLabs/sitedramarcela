'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BioSectionProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const BioSection = ({
  title,
  content,
  imageSrc,
  imageAlt,
  showButton = false,
  buttonText = '',
  buttonLink = '',
}: BioSectionProps) => {
  // Animação suave ao rolar a página
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
              'translate-y-8'
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.bio-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Formas decorativas */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#87CEEB] rounded-full opacity-10" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#4682B4] rounded-full opacity-10" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] md:h-[600px] bio-animate opacity-0 translate-y-8 transition duration-700 ease-out">
            {/* Círculo decorativo */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-[#87CEEB] opacity-20 z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />

            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain rounded-lg z-10 relative"
              style={{
                filter:
                  'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1))',
                transition: 'all 0.5s ease',
                animation:
                  'fadeIn 1.5s ease-out forwards, slideIn 1.5s ease-out forwards',
                opacity: 0,
                transform: 'translateX(20px)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter =
                  'drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.2))';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter =
                  'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1))';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>

          <div className="bio-animate opacity-0 translate-y-8 transition duration-700 delay-200 ease-out">
            <h2 className="text-3xl md:text-4xl font-serif text-[#394240] mb-6">
              {title}
            </h2>
            <div className="prose prose-lg max-w-none text-[#5C6857]">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {showButton && buttonText && buttonLink && (
              <div className="mt-6">
                <Link
                  href={buttonLink}
                  className="btn-secondary hover:scale-105 transition-transform"
                  style={{
                    animation: 'fadeInUp 1.2s ease-out 0.5s forwards',
                    opacity: 0,
                    transform: 'translateY(20px)',
                  }}
                >
                  {buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
