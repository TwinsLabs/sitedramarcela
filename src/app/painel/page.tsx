'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import BioSection from '@/components/sections/BioSection';
import PanelDocuments from '@/components/sections/PanelDocuments';
import PanelBenefits from '@/components/sections/PanelBenefits';

export default function Painel() {
  const { pageContent, panelContent, contactInfo, isLoading } = useContent();
  
  if (isLoading) {
    return <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">Carregando...</div>;
  }
  
  const content = pageContent['painel'] || {};
  const title = content['title'] || 'Painel "Medicina do Trabalho Prática e Inteligente"';
  const subtitle = content['subtitle'] || 'Documentos, modelos e templates essenciais para a prática da Medicina do Trabalho e Perícias Médicas.';
  const introText = content['intro'] || '';
  const ctaText = content['cta-text'] || '';
  const salesPageUrl = contactInfo.salesPageUrl || 'https://exemplo-pagina-vendas.com';

  return (
    <div>
      <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif text-[#394240] mb-6 text-center">{title}</h1>
          <p className="text-lg text-[#5C6857] max-w-3xl mx-auto text-center mb-12">
            {subtitle}
          </p>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose prose-lg max-w-none">
            <p>{introText}</p>
          </div>
        </div>
      </section>
      
      <PanelBenefits 
        title="Vantagens de Adquirir o Painel"
        subtitle="Conheça os benefícios que o Painel 'Medicina do Trabalho Prática e Inteligente' pode trazer para sua prática profissional."
      />
      
      <PanelDocuments 
        title="Documentos Incluídos no Painel"
        subtitle="Acesse uma ampla variedade de modelos e templates prontos para uso."
        documents={panelContent.documents || []}
      />
      
      <section className="section-padding bg-[#5C6857] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Por que vale a pena investir?</h2>
          <div className="prose prose-lg prose-invert max-w-3xl mx-auto">
            <p>{ctaText}</p>
          </div>
          <div className="mt-8">
            <a 
              href={salesPageUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#5C6857] py-4 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg inline-flex items-center"
            >
              Adquirir o Painel Agora
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
