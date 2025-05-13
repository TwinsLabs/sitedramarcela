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
    console.log('Form data received on home page:', formData);
    // O envio agora é tratado pelo componente ContactForm
  };

  return (
    <>
      <Hero page="home" />

      <BioSection
        title="Sobre Dra. Marcella Vieira"
        content={bioContent.substring(0, 300) + '...'}
        imageSrc="/images/03.png"
        imageAlt="Dra. Marcella Vieira"
        showButton={true}
        buttonText="Conheça mais sobre mim"
        buttonLink="/sobre"
      />

      <ServicesGrid page="home" />

      <LandingProductPanel className="mt-16" />

      <ContactSection
        title="Entre em Contato"
        subtitle="Estou à disposição para esclarecer dúvidas e atender às suas necessidades."
        onSubmit={handleContactSubmit}
      />
    </>
  );
}
