'use client';

import React, { useEffect } from 'react';
import {
  FaCheck,
  FaDownload,
  FaShieldAlt,
  FaClock,
  FaFileAlt,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface LandingProductPanelProps {
  className?: string;
}

const LandingProductPanel = ({
  className = '',
}: LandingProductPanelProps) => {
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

    const elements = document.querySelectorAll('.landing-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      className={`section-padding bg-gradient-to-b from-white to-[#F8F6F4] relative overflow-hidden ${className}`}
    >
      {/* Formas decorativas */}
      <div className="absolute top-[-150px] right-[-100px] w-[350px] h-[350px] bg-[#87CEEB] rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[250px] h-[250px] bg-[#4682B4] rounded-full opacity-10 animate-float" />
      <div className="absolute top-[30%] left-[10%] w-[15px] h-[15px] bg-[#5C6857] rounded-full opacity-20 animate-float" />
      <div className="absolute top-[60%] right-[15%] w-[20px] h-[20px] bg-[#E5DDD4] rounded-full opacity-40 animate-float-reverse" />

      <div className="container-custom relative z-10">
        {/* Cabeçalho Principal */}
        <div className="landing-animate opacity-0 translate-y-8 transition duration-700 ease-out text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#394240] mb-6">
            Painel Digital para Profissionais de Saúde
          </h2>
          <div className="h-1 w-24 bg-[#5C6857] mx-auto mb-8"></div>
          <p className="text-xl text-[#5C6857] max-w-3xl mx-auto">
            <span className="font-medium">
              A solução completa para médicos e profissionais de saúde
            </span>{' '}
            que buscam otimizar seu tempo e garantir qualidade nos
            atendimentos com documentos padronizados e atualizados.
          </p>
        </div>

        {/* Visão geral do produto - Imagem e texto lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="landing-animate opacity-0 translate-y-8 transition duration-700 delay-100 ease-out">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/painel.png"
                alt="Painel Digital para Profissionais de Saúde"
                fill
                className="object-cover object-center"
                style={{
                  animation: 'fadeIn 1.5s ease-out forwards',
                }}
              />
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(57,66,64,0.2)] to-transparent"></div>

              {/* Emblema de destaque */}
              <div className="absolute top-4 right-4 bg-[#5C6857] text-white px-4 py-2 rounded-full text-sm font-medium transform rotate-3 shadow-lg">
                Novo
              </div>
            </div>
          </div>

          <div className="landing-animate opacity-0 translate-y-8 transition duration-700 delay-150 ease-out">
            <h3 className="text-3xl font-serif text-[#394240] mb-5">
              Toda a documentação que você precisa em um único lugar
            </h3>
            <p className="text-[#5C6857] mb-8 text-lg">
              Desenvolvido por especialistas para médicos, clínicas e
              profissionais de saúde que valorizam tempo, organização
              e conformidade legal em suas atividades diárias.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <FaFileAlt className="text-[#5C6857] text-2xl mr-4" />
                <p className="font-medium">
                  Mais de 30 modelos prontos
                </p>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <FaClock className="text-[#5C6857] text-2xl mr-4" />
                <p className="font-medium">
                  Economia de 10h semanais
                </p>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <FaShieldAlt className="text-[#5C6857] text-2xl mr-4" />
                <p className="font-medium">Segurança jurídica</p>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <FaDownload className="text-[#5C6857] text-2xl mr-4" />
                <p className="font-medium">Atualizações regulares</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <Link
                href="/contato"
                className="btn-primary flex items-center justify-center hover-zoom px-8 py-3"
                style={{
                  animation: 'fadeInUp 1.2s ease-out 0.8s forwards',
                  opacity: 0,
                }}
              >
                <FaDownload className="mr-2" /> Adquirir agora
              </Link>
              <Link
                href="#detalhes"
                className="btn-secondary flex items-center justify-center hover-zoom px-8 py-3"
                style={{
                  animation: 'fadeInUp 1.2s ease-out 1s forwards',
                  opacity: 0,
                }}
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        </div>

        {/* Seção de detalhes do produto */}
        <div
          id="detalhes"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
        >
          <div className="lg:col-span-2">
            <div className="landing-animate opacity-0 translate-y-8 transition duration-700 delay-200 ease-out">
              <h3 className="text-2xl font-serif text-[#394240] mb-6">
                O que você encontrará no Painel?
              </h3>
              <p className="text-[#5C6857] mb-8">
                Acesso imediato a um conjunto completo de modelos
                profissionais, formulários e documentos padronizados
                para agilizar seu trabalho e garantir que nenhum
                detalhe importante seja esquecido no atendimento aos
                seus pacientes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-serif text-[#394240] mb-4 border-b border-[#E5DDD4] pb-2">
                    Documentos Clínicos
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Prontuários eletrônicos personalizáveis</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Modelos de anamnese completa</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Fichas de evolução clínica</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Formulários de avaliação especializada</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Termos de consentimento informado</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-serif text-[#394240] mb-4 border-b border-[#E5DDD4] pb-2">
                    Documentos Administrativos
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Modelos de receituários personalizáveis</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Atestados médicos padronizados</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Solicitações de exames complementares</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Relatórios para convênios e seguradoras</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>Contratos de prestação de serviços</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-[#394240] mb-6">
                Por que vale a pena investir?
              </h3>
              <p className="text-[#5C6857] mb-8">
                Mais do que uma coletânea de documentos, este painel é
                um investimento na qualidade e eficiência da sua
                prática profissional. Economize tempo valioso que
                seria gasto criando documentos do zero e tenha a
                tranquilidade de utilizar materiais desenvolvidos por
                especialistas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-serif text-[#394240] mb-4 flex items-center">
                    <FaClock className="text-[#5C6857] mr-3" />{' '}
                    Benefícios Práticos
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>
                        Economia de até 10 horas por semana em
                        trabalho administrativo
                      </p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>
                        Documentação padronizada e profissional para
                        seus pacientes
                      </p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>
                        Fácil personalização para sua especialidade e
                        necessidades
                      </p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>
                        Redução de erros e omissões em documentos
                        importantes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-serif text-[#394240] mb-4 flex items-center">
                    <FaShieldAlt className="text-[#5C6857] mr-3" />{' '}
                    Segurança Técnica e Jurídica
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>
                        Documentos desenvolvidos conforme diretrizes
                        dos conselhos de classe
                      </p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>
                        Conformidade com a LGPD e legislações
                        específicas da área de saúde
                      </p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>
                        Termos claros que protegem tanto o
                        profissional quanto o paciente
                      </p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                      <p>
                        Atualizações automáticas quando há mudanças na
                        legislação
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F1EDE9] p-8 rounded-lg shadow-md mb-12">
                <h3 className="text-2xl font-serif text-[#394240] mb-4">
                  Garantimos sua satisfação
                </h3>
                <p className="text-[#5C6857] mb-4">
                  Se em 15 dias você não estiver completamente
                  satisfeito com o painel, devolvemos 100% do seu
                  investimento, sem questionamentos. Nossa prioridade
                  é que o produto realmente agregue valor à sua
                  prática profissional.
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
                    <FaShieldAlt className="text-[#5C6857] text-3xl" />
                  </div>
                  <p className="font-serif text-lg text-[#394240]">
                    <span className="font-bold">15 dias</span> de
                    garantia incondicional
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Oferta */}
          <div className="landing-animate opacity-0 translate-y-8 transition duration-700 delay-300 ease-out">
            <div className="bg-white rounded-lg p-6 shadow-xl sticky top-24 border-t-4 border-[#5C6857]">
              <div className="absolute -top-5 -right-5 bg-[#E5DDD4] text-[#394240] px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
                Oferta Limitada
              </div>

              <h3 className="text-2xl font-serif text-[#394240] mb-4 text-center">
                Painel Digital Completo
              </h3>
              <p className="text-center mb-2 text-[#5C6857]">
                Acesso imediato a todos os recursos
              </p>

              <div className="text-center my-8">
                <div className="inline-block bg-[#F8F6F4] px-6 py-3 rounded-lg">
                  <span className="text-sm text-[#5C6857] line-through">
                    R$ 497,00
                  </span>
                  <p className="text-5xl font-bold text-[#394240] mt-1">
                    R$ 397<span className="text-2xl">,00</span>
                  </p>
                  <p className="text-sm text-[#5C6857] mt-1">
                    Pagamento único
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                  <p>
                    <span className="font-medium">
                      Mais de 30 modelos
                    </span>{' '}
                    de documentos profissionais
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                  <p>
                    <span className="font-medium">
                      Atualizações constantes
                    </span>{' '}
                    sem custo adicional
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                  <p>
                    Acesso{' '}
                    <span className="font-medium">
                      imediato e vitalício
                    </span>{' '}
                    ao material
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <FaCheck className="text-[#5C6857] mt-1 mr-3 flex-shrink-0" />
                  <p>
                    <span className="font-medium">
                      Garantia de 15 dias
                    </span>{' '}
                    ou seu dinheiro de volta
                  </p>
                </div>
              </div>

              <Link
                href="/contato"
                className="btn-primary w-full flex items-center justify-center hover-zoom py-4 text-lg"
                style={{
                  animation: 'pulse 2s infinite',
                }}
              >
                <FaDownload className="mr-2" /> Adquirir com desconto
              </Link>

              <p className="text-center text-sm text-[#5C6857] mt-4">
                Pagamento 100% seguro via PIX ou cartão
              </p>

              <div className="mt-8 p-4 bg-[#F8F6F4] rounded-lg">
                <p className="text-sm text-[#5C6857] italic">
                  "Este painel transformou minha rotina clínica. A
                  organização e a qualidade dos documentos são
                  impressionantes. Recomendo a todos os colegas de
                  profissão."
                </p>
                <p className="text-right text-sm font-medium text-[#394240] mt-2">
                  — Dra. Ana Soares, Clínica Geral
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProductPanel;
