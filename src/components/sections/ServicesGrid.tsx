'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import ServiceCard from '../ui/ServiceCard';

interface ServicesGridProps {
  page: string;
}

const ServicesGrid = ({ page }: ServicesGridProps) => {
  const { pageContent, serviceContent, isLoading } = useContent();
  
  if (isLoading) {
    return <div className="section-padding bg-white">Carregando...</div>;
  }
  
  const content = pageContent[page] || {};
  const title = content['services-title'] || 'Serviços Especializados';
  const subtitle = content['services-subtitle'] || 'Conheça os serviços de excelência em Medicina do Trabalho e Perícias Médicas.';
  
  // Obter os primeiros 3 serviços para exibir na página inicial
  const services = Object.entries(serviceContent).slice(0, 3).map(([slug, service]) => ({
    title: service.title,
    description: service.description,
    icon: service.icon,
    link: `/servicos/${slug}`
  }));

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#394240] mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-[#5C6857] max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/servicos" className="btn-secondary">
            Ver Todos os Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
