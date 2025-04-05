'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import BioSection from '@/components/sections/BioSection';
import ContactSection from '@/components/sections/ContactSection';
import LandingProductPanel from '@/components/sections/LandingProductPanel';

export default function Home() {
  const { pageContent, isLoading } = useContent();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-primary text-xl">
          Carregando...
        </div>
      </div>
    );
  }

  const sobreContent = pageContent['sobre'] || {};
  const bioContent = sobreContent['bio-content'] || '';

  const handleContactSubmit = (formData: any) => {
    console.log('Form data:', formData);
    // Aqui seria implementada a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <>
      <Hero page="home" />

      <ServicesGrid page="home" />

      <BioSection
        title="Sobre Dra. Marcella Vieira"
        content={bioContent.substring(0, 300) + '...'}
        imageSrc="/images/dramarcela.png"
        imageAlt="Dra. Marcella Vieira"
        showButton={true}
        buttonText="Conheça mais sobre mim"
        buttonLink="/sobre"
      />

      <LandingProductPanel className="mt-16" />

      <ContactSection
        title="Entre em Contato"
        subtitle="Estou à disposição para esclarecer dúvidas e atender às suas necessidades."
        onSubmit={handleContactSubmit}
      />
    </>
  );
}
