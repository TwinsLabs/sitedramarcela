'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import ContactForm from '@/components/ui/ContactForm';
import QuoteRequestForm from '@/components/ui/QuoteRequestForm';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import ContactSection from '@/components/sections/ContactSection';

export default function Contato() {
  const { pageContent, contactInfo, isLoading } = useContent();

  if (isLoading) {
    return (
      <div className="pt-16 md:pt-24 bg-[#E5DDD4] bg-opacity-30">
        Carregando...
      </div>
    );
  }

  const content = pageContent['contato'] || {};
  const title = content['title'] || 'Contato';
  const subtitle =
    content['subtitle'] ||
    'Entre em contato para agendar uma consulta, solicitar orçamento ou esclarecer dúvidas.';
  const sectionTitle =
    content['section-title'] || 'Fale com a Dra. Marcella Vieira';
  const sectionSubtitle =
    content['section-subtitle'] ||
    'Estou à disposição para atender às suas necessidades em Medicina do Trabalho e Perícias Médicas.';

  const handleContactSubmit = (formData: any) => {
    console.log('Form data received in page component:', formData);
  };

  const handleQuoteSubmit = (formData: any) => {
    console.log('Quote request data:', formData);
    // Aqui seria implementada a lógica para enviar o formulário de orçamento
    alert('Solicitação de orçamento enviada com sucesso!');
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-[#394240] mb-6">
                {sectionTitle}
              </h2>
              <p className="text-lg text-[#5C6857] mb-8">
                {sectionSubtitle}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#5C6857] flex items-center justify-center text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#394240]">
                      Telefone
                    </h3>
                    <p>{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#5C6857] flex items-center justify-center text-white mr-4">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#394240]">
                      WhatsApp
                    </h3>
                    <p>{contactInfo.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#5C6857] flex items-center justify-center text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#394240]">
                      E-mail
                    </h3>
                    <p>{contactInfo.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#A5776C] flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
                >
                  <FaInstagram />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#A5776C] flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div>
              <ContactForm onSubmit={handleContactSubmit} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#E5DDD4] bg-opacity-30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[#394240] mb-4">
              Solicite um Orçamento
            </h2>
            <p className="text-lg text-[#5C6857] max-w-3xl mx-auto">
              Preencha o formulário abaixo para solicitar um orçamento
              personalizado para os serviços de seu interesse.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <QuoteRequestForm onSubmit={handleQuoteSubmit} />
          </div>
        </div>
      </section>
    </div>
  );
}
