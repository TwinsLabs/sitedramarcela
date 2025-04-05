'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/sections/ContactSection';

export default function ServicoDetalhe() {
  const params = useParams();
  const slug = params.slug as string;
  const { serviceContent, isLoading } = useContent();
  
  if (isLoading) {
    return <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">Carregando...</div>;
  }
  
  const service = serviceContent[slug];
  
  if (!service) {
    return (
      <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30 min-h-screen">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#394240] mb-6">Serviço não encontrado</h1>
          <p className="text-lg text-[#5C6857] mb-8">
            O serviço que você está procurando não está disponível.
          </p>
          <Link href="/servicos" className="btn-secondary">
            Ver todos os serviços
          </Link>
        </div>
      </div>
    );
  }
  
  const handleContactSubmit = (formData: Record<string, string>) => {
    console.log('Form data:', formData);
    // Aqui seria implementada a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <div>
      <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif text-[#394240] mb-6 text-center">{service.title}</h1>
          <p className="text-lg text-[#5C6857] max-w-3xl mx-auto text-center mb-12">
            {service.description}
          </p>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                {service.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/contato" className="btn-cta inline-block">
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
            
            <div>
              <div className="bg-[#E5DDD4] bg-opacity-30 p-6 rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 relative">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-[#394240] mb-4 text-center">Outros Serviços</h3>
                
                <ul className="space-y-2">
                  {Object.entries(serviceContent)
                    .filter(([key]) => key !== slug)
                    .slice(0, 4)
                    .map(([key, otherService]) => (
                      <li key={key} className="border-b border-gray-200 pb-2 last:border-0">
                        <Link 
                          href={`/servicos/${key}`}
                          className="text-[#5C6857] hover:text-[#A5776C] transition-colors"
                        >
                          {otherService.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                
                <div className="mt-6 text-center">
                  <Link href="/servicos" className="text-[#A5776C] hover:text-[#5C6857] transition-colors font-medium">
                    Ver todos os serviços
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection 
        title="Precisa de mais informações?"
        subtitle="Entre em contato para esclarecer dúvidas ou solicitar um orçamento personalizado."
        onSubmit={handleContactSubmit}
      />
    </div>
  );
}
