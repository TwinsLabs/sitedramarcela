'use client';

import React, { useEffect } from 'react';
import { FaCheck, FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface PanelContentProps {
  className?: string;
}

const PanelContent = ({ className = '' }: PanelContentProps) => {
  // Animação suave ao rolar a página
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              'opacity-100',
              'translate-y-0'
            );
            entry.target.classList.remove(
              'opacity-0',
              'translate-y-8'
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.panel-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      className={`section-padding bg-white relative overflow-hidden ${className}`}
    >
      {/* Formas decorativas */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#87CEEB] rounded-full opacity-10" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#4682B4] rounded-full opacity-10" />

      <div className="container-custom relative z-10">
        <div className="panel-animate opacity-0 translate-y-8 transition duration-700 ease-out">
          <h2 className="text-3xl md:text-4xl font-serif text-[#394240] mb-6 text-center">
            Painel "Medicina do Trabalho Prática e Inteligente"
          </h2>
          <div className="h-1 w-20 bg-[#5C6857] mx-auto mb-8"></div>
          <p className="text-lg text-[#5C6857] max-w-3xl mx-auto text-center mb-12">
            Desenvolvido especialmente para profissionais da área de
            Medicina do Trabalho e Perícias Médicas que buscam
            praticidade, eficiência e materiais de qualidade para o
            exercício da profissão.
          </p>
        </div>

        {/* Imagem do laptop com o painel */}
        <div className="panel-animate opacity-0 translate-y-8 transition duration-700 delay-100 ease-out mb-16">
          <div className="relative w-full max-w-4xl h-[400px] mx-auto">
            <Image
              src="/images/painel.png"
              alt="Painel Medicina do Trabalho no laptop"
              fill
              className="object-contain"
              style={{
                animation: 'fadeIn 1.5s ease-out forwards',
                filter:
                  'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.15))',
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <div className="panel-animate opacity-0 translate-y-8 transition duration-700 delay-200 ease-out">
              <h3 className="text-2xl font-serif text-[#394240] mb-6">
                O que você encontrará no Painel?
              </h3>
              <p className="text-[#5C6857] mb-8">
                Ao adquirir o painel, você poderá realizar o download
                de materiais diversos, incluindo modelos, templates,
                checklists e relatórios essenciais para a Medicina do
                Trabalho e Perícias Médicas.
              </p>

              <h4 className="text-xl font-serif text-[#394240] mb-4">
                Documentos incluídos:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>
                      Modelo Ficha Clínica Ocupacional - Exames
                      Admissional, Periódico, etc.
                    </p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>
                      Modelo Ficha Clínica para atendimentos em
                      Ortopedia
                    </p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Modelo de Solicitação de Parecer/Relatórios</p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Modelo de Visita Técnica</p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>
                      Modelo Proposta de Honorários para Perícia
                      Médica
                    </p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Modelos de Exames Físicos</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>
                      Modelo Ficha Clínica para atendimentos em Saúde
                      Mental
                    </p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>
                      Modelo de Encaminhamento ao INSS para Médicos
                    </p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Modelo de Descrição de Restrições Médicas</p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Modelos de laudos para perícias diversas</p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Fluxogramas de processos médicos</p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Orientações e Cartilhas de Saúde</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-[#394240] mb-6">
                Por que vale a pena investir?
              </h3>
              <p className="text-[#5C6857] mb-8">
                O Painel não é apenas um conjunto de documentos, mas
                uma ferramenta de otimização e inovação no seu
                trabalho. Com ele, você terá à disposição uma
                verdadeira "biblioteca" de materiais que são
                constantemente atualizados e alinhados com as
                necessidades da sua área.
              </p>

              <h4 className="text-xl font-serif text-[#394240] mb-4">
                Benefícios:
              </h4>
              <div className="mb-8">
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>Documentos prontos para uso e personalização</p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Material elaborado por especialistas em Medicina
                    do Trabalho
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>Economia de tempo na criação de documentos</p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Segurança técnica e jurídica em todas as
                    atividades
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>Atualizações conforme mudanças na legislação</p>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-[#394240] mb-6">
                Segurança Técnica e Jurídica
              </h3>
              <p className="text-[#5C6857] mb-8">
                Todos os materiais incluídos no painel foram criados
                levando em consideração as normativas da legislação
                trabalhista e de saúde, bem como as melhores práticas
                da área médica, garantindo segurança técnica e
                jurídica em todas as suas atividades.
              </p>
            </div>
          </div>

          <div className="panel-animate opacity-0 translate-y-8 transition duration-700 delay-300 ease-out">
            <div className="bg-[#E5DDD4] bg-opacity-40 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-serif text-[#394240] mb-4 text-center">
                Painel Completo
              </h3>
              <p className="text-center mb-4 text-[#5C6857]">
                Todos os documentos e recursos
              </p>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#394240]">
                  R$ 297,00
                </span>
                <p className="text-sm text-[#5C6857]">
                  Pagamento único
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm">
                    Documentos prontos para uso e personalização
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm">
                    Material elaborado por especialistas em Medicina
                    do Trabalho
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm">
                    Economia de tempo na criação de documentos
                  </p>
                </div>
              </div>

              <Link
                href="/contato"
                className="btn-primary w-full flex items-center justify-center hover-zoom"
                style={{
                  animation: 'fadeInUp 1.2s ease-out 0.8s forwards',
                  opacity: 0,
                }}
              >
                <FaDownload className="mr-2" /> Adquirir agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelContent;
