'use client';

import React from 'react';
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
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain bg-white rounded-lg shadow-lg"
            />
          </div>

          <div>
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
                <Link href={buttonLink} className="btn-secondary">
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
