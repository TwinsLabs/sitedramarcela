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
          <p className="text-lg text-[#5C6857] max-w-3xl mx-auto text-center mb-12">
            Pensando nesses desafios do dia a dia, desenvolvemos o{' '}
            <b>
              Painel Inteligente de Medicina do Trabalho e Perícias
              Médicas
            </b>{' '}
            — uma plataforma digital criada especialmente para
            agilizar e qualificar o trabalho de profissionais da área,
            sem abrir mão da segurança jurídica.
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
                O que é o Painel?
              </h3>
              <p className="text-[#5C6857] mb-8">
                É uma <b>biblioteca digital prática e organizada </b>,
                com acesso imediato a uma série de documentos técnicos
                e juridicamente validados, prontos para uso em
                contextos de:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Consultórios de saúde ocupacional</p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p className="whitespace-nowrap">
                      Atuação como perito judicial ou assistente
                      técnico;
                    </p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Auditorias e fiscalizações</p>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                    <p>Empresas e instituições públicas</p>
                  </div>
                </div>
              </div>

              <p className="text-[#5C6857] mb-8">
                Todo o conteúdo do Painel foi elaborado com base na
                experiência da Dra. Marcella, médica com
                especialização em Medicina do Trabalho pela
                Universidade de São Paulo (USP), Titulada Especialista
                pela Associação Nacional em Medicina do Trabalho
                (ANAMT).
              </p>

              <h4 className="text-xl font-serif text-[#394240] mb-4">
                O que você encontrará no Painel:
              </h4>
              <div className="mb-8">
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Modelos de laudos, pareceres, quesitos, minutas e
                    muito mais;
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Estrutura organizada por categorias, com navegação
                    intuitiva;
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Atualizações contínuas, alinhadas à legislação
                    vigente;
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Conteúdo validado sob os aspectos técnico e
                    jurídico;
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Material pronto para uso, que economiza tempo e
                    garante padronização;
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Apoio para atuação em diferentes contextos
                    profissionais
                  </p>
                </div>
              </div>

              <h4 className="text-xl font-serif text-[#394240] mb-6">
                Para quem é?
              </h4>
              <div className="mb-8">
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>Médicos do Trabalho;</p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>Médicos examinadores;</p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>Peritos judiciais e assistentes técnicos;</p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>Gestores de saúde ocupacional;</p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>Profissionais da medicina legal;</p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Médicos que desejam estruturar melhor a
                    documentação do consultório;
                  </p>
                </div>
                <div className="flex items-start mb-3">
                  <FaCheck className="text-[#5C6857] mt-1 mr-2 flex-shrink-0" />
                  <p>
                    Profissionais que atuam na saúde ocupacional
                    prestando atendimento ao trabalhador - equipe
                    multidisciplinar
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-serif text-[#394240] mb-6">
                Qual o objetivo?
              </h4>
              <p className="text-[#5C6857] mb-8">
                Oferecer mais <b>agilidade, segurança e confiança</b>{' '}
                na elaboração de documentos técnicos, liberando o
                profissional para focar naquilo que realmente importa:
                o cuidado com as pessoas e a tomada de decisões com
                base em evidências.
              </p>
              <h4 className="text-xl font-serif text-[#394240] mb-6">
                Como acessar?
              </h4>
              <p className="text-[#5C6857] mb-8">
                O Painel está disponível na plataforma <b>Hotmart</b>,
                com acesso 100% online e imediato. Você pode acessar
                os materiais sempre que precisar, de qualquer lugar,
                com atualizações incluídas.
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
                  R$99,90
                </span>
                <p className="text-sm text-[#5C6857]">
                  à vista ou em 4x de R$27,19
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
                href="https://dramarcellaribeirovieira.hotmart.host/painel-inteligente-de-medicina-do-trabalho-e-pericias-medicas-4be0ee70-1f7b-4718-8cd7-b184bec0fc6e"
                className="btn-primary flex items-center justify-center w-full hover-zoom px-6 py-3"
                style={{
                  animation: 'fadeInUp 1.2s ease-out 1s forwards',
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
