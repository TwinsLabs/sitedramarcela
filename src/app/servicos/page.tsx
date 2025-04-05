'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ContactSection from '@/components/sections/ContactSection';
import Link from 'next/link';

export default function Servicos() {
  const { pageContent, serviceContent, isLoading } = useContent();
  
  if (isLoading) {
    return <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">Carregando...</div>;
  }
  
  const content = pageContent['servicos'] || {};
  const title = content['title'] || 'Serviços';
  const subtitle = content['subtitle'] || 'Conheça os serviços especializados em Medicina do Trabalho e Perícias Médicas oferecidos pela Dra. Marcella Vieira.';
  
  const handleContactSubmit = (formData: Record<string, string>) => {
    console.log('Form data:', formData);
    // Aqui seria implementada a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(serviceContent).map(([slug, service]) => (
              <div key={slug} className="bg-[#E5DDD4] bg-opacity-20 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 relative mr-4">
                      <img 
                        src={service.icon} 
                        alt={service.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-serif text-[#394240]">{service.title}</h3>
                  </div>
                  
                  <p className="text-[#5C6857] mb-6">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={`/servicos/${slug}`}
                    className="text-[#A5776C] hover:text-[#5C6857] transition-colors font-medium flex items-center"
                  >
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="section-padding bg-[#E5DDD4] bg-opacity-30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[#394240] mb-4">Solicite um Orçamento</h2>
            <p className="text-lg text-[#5C6857] max-w-3xl mx-auto">
              Entre em contato para obter mais informações sobre os serviços ou solicitar um orçamento personalizado.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link href="/contato" className="btn-cta">
              Entrar em Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
