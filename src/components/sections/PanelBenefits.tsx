import React from 'react';
import BenefitCard from '../ui/BenefitCard';
import { FaCheckCircle, FaShieldAlt, FaClock, FaAccessibleIcon, FaLayerGroup, FaBalanceScale } from 'react-icons/fa';

interface PanelBenefitsProps {
  title: string;
  subtitle?: string;
}

const PanelBenefits = ({ title, subtitle }: PanelBenefitsProps) => {
  const benefits = [
    {
      title: 'Praticidade',
      description: 'Todos os documentos estão prontos para uso, bastando apenas fazer o download e personalizar conforme necessário.',
      icon: <FaCheckCircle className="w-10 h-10" />
    },
    {
      title: 'Qualidade e Atualização',
      description: 'Conteúdo elaborado por especialistas com experiência na área, garantindo acesso às melhores práticas e informações atualizadas.',
      icon: <FaShieldAlt className="w-10 h-10" />
    },
    {
      title: 'Economia de Tempo',
      description: 'Otimize o tempo dedicado à criação de documentos, permitindo que se concentre no que realmente importa: o atendimento e a qualidade das suas análises.',
      icon: <FaClock className="w-10 h-10" />
    },
    {
      title: 'Acessibilidade',
      description: 'Acesso a materiais de alta qualidade por um valor acessível, sem precisar buscar ou pagar por diferentes fontes de informação.',
      icon: <FaAccessibleIcon className="w-10 h-10" />
    },
    {
      title: 'Integração com seu Trabalho',
      description: 'Documentos prontos para serem adaptados à sua realidade profissional, podendo ser utilizados diretamente nos atendimentos, laudos e relatórios médicos.',
      icon: <FaLayerGroup className="w-10 h-10" />
    },
    {
      title: 'Segurança Jurídica',
      description: 'Documentos estruturados em conformidade com a legislação vigente, minimizando o risco de erros que possam comprometer a validade dos seus serviços.',
      icon: <FaBalanceScale className="w-10 h-10" />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#394240] mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-[#5C6857] max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanelBenefits;
