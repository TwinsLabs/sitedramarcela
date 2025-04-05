'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import BioSection from '@/components/sections/BioSection';
import Credentials from '@/components/sections/Credentials';
import ContactSection from '@/components/sections/ContactSection';

export default function Sobre() {
  const { pageContent, isLoading } = useContent();

  if (isLoading) {
    return (
      <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">
        Carregando...
      </div>
    );
  }

  const content = pageContent['sobre'] || {};
  const title = content['title'] || 'Sobre Dra. Marcella Vieira';
  const subtitle =
    content['subtitle'] ||
    'Médica do Trabalho especializada em perícias médicas e consultoria em saúde ocupacional.';
  const bioTitle = content['bio-title'] || 'Biografia';
  const bioContent = content['bio-content'] || '';

  // Mock data for credentials
  const credentials = [
    {
      title: 'Formação Acadêmica',
      description:
        'Graduada em Medicina pela Universidade de Uberaba (UNIUBE) e Especialista em Medicina do Trabalho pela FMUSP/SP.',
      icon: '/images/credential-icon-1.svg',
    },
    {
      title: 'Experiência Profissional',
      description:
        'Perita Médica Judicial no TRF 1 e TRT 3, com vasta experiência em medicina ocupacional e perícias médicas.',
      icon: '/images/credential-icon-2.svg',
    },
    {
      title: 'Certificações',
      description:
        'CRM: 80479 • RQE: 61114. Profissional certificada e regularizada para atuação em Medicina do Trabalho.',
      icon: '/images/credential-icon-3.svg',
    },
  ];

  const handleContactSubmit = (formData: any) => {
    console.log('Form data:', formData);
    // Aqui seria implementada a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <div>
      <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif text-[#394240] mb-6 text-center">
            {title}
          </h1>
          <p className="text-lg text-[#5C6857] max-w-3xl mx-auto text-center mb-12">
            {subtitle}
          </p>
        </div>
      </div>

      <BioSection
        title={bioTitle}
        content={bioContent}
        imageSrc="/images/dramarcela.png"
        imageAlt="Dra. Marcella Vieira"
      />

      <Credentials items={credentials} />

      <ContactSection
        title="Entre em Contato"
        subtitle="Estou à disposição para esclarecer dúvidas e atender às suas necessidades."
        onSubmit={handleContactSubmit}
      />
    </div>
  );
}
