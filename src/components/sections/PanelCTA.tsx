'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import Link from 'next/link';
import Image from 'next/image';

interface PanelCTAProps {
  page?: string;
}

const PanelCTA = ({ page = 'home' }: PanelCTAProps) => {
  const { pageContent, contactInfo, isLoading } = useContent();
  
  if (isLoading) {
    return <div className="section-padding bg-[#C6B4A9] bg-opacity-30">Carregando...</div>;
  }
  
  const content = pageContent['painel'] || {};
  const title = content['title'] || 'Painel "Medicina do Trabalho Prática e Inteligente"';
  const description = content['intro'] || 'Acesse documentos, modelos e templates essenciais para a prática da Medicina do Trabalho e Perícias Médicas, desenvolvidos para otimizar seu trabalho com segurança técnica e jurídica.';
  const ctaText = "Conhecer o Painel";
  const ctaLink = contactInfo.salesPageUrl || "https://exemplo-pagina-vendas.com";

  return (
    <section className="section-padding bg-[#C6B4A9] bg-opacity-30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/images/panel-image.jpg"
              alt={title}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#394240] mb-4">{title}</h2>
            <p className="text-lg text-[#5C6857] mb-6">{description}</p>
            <a 
              href={ctaLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cta inline-flex items-center"
            >
              {ctaText}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelCTA;
