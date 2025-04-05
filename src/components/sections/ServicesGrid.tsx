'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import ServiceCard from '../ui/ServiceCard';
import Link from 'next/link';

// Mapeamento de ícones mais relevantes para cada serviço
const serviceIcons: Record<string, string> = {
  'Medicina e Segurança do Trabalho':
    '/images/icons/medicine-icon.svg',
  'Saúde Ocupacional': '/images/icons/health-icon.svg',
  Ergonomia: '/images/icons/ergonomics-icon.svg',
  'Perícias Médicas': '/images/icons/medical-exam-icon.svg',
  Psicologia: '/images/icons/psychology-icon.svg',
  Audiologia: '/images/icons/audio-icon.svg',
  // Ícones padrão para outros serviços
  default: '/images/icons/service-icon.svg',
};

interface ServicesGridProps {
  className?: string;
  page?: string;
}

interface ServiceType {
  title: string;
  description: string;
  shortDescription?: string;
  icon: string;
  link: string;
}

const ServicesGrid = ({
  className = '',
  page = 'home',
}: ServicesGridProps) => {
  const { serviceContent, pageContent, isLoading } = useContent();

  if (isLoading) {
    return (
      <div className="animate-pulse bg-gray-200 h-96 w-full rounded-lg"></div>
    );
  }

  const content = pageContent[page] || {};
  const title =
    content['services-title'] || 'Serviços Especializados';
  const subtitle =
    content['services-subtitle'] ||
    'Oferecemos serviços de alta qualidade com foco na saúde e bem-estar no ambiente de trabalho';

  // Obter os primeiros 3 serviços para exibir na página inicial
  const services = Object.entries(serviceContent)
    .slice(0, 3)
    .map(([slug, service]: [string, any]) => ({
      title: service.title,
      description: service.description,
      icon: serviceIcons[service.title] || serviceIcons.default,
      link: `/servicos/${slug}`,
    }));

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#394240] mb-3 relative inline-block">
            {title}
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#A5776C] transform translate-y-1 opacity-70"></span>
          </h2>
          <p className="text-[#5C6857] max-w-2xl mx-auto text-lg font-secondary">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: ServiceType, index: number) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={
                service.description.substring(0, 120) + '...'
              }
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        {Object.keys(serviceContent).length > 3 && (
          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#A5776C] text-white rounded-md hover:bg-[#8A6054] transition-colors duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Ver todos os serviços
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
