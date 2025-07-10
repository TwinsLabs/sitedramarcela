'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import PanelContent from '@/components/sections/PanelContent';

export default function Painel() {
  const { isLoading } = useContent();

  if (isLoading) {
    return (
      <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">
        Carregando...
      </div>
    );
  }

  return (
    <div>
      <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif text-[#394240] mb-6 text-center">
            Painel Inteligente de Medicina do Trabalho e Perícias
            Médicas
          </h1>
          <div className="h-1 w-20 bg-[#5C6857] mx-auto mb-8"></div>
        </div>
      </div>

      <PanelContent />
    </div>
  );
}
