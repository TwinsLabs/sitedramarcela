'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definindo a interface para o contexto de conteúdo
interface ContentContextType {
  pageContent: Record<string, any>;
  serviceContent: Record<string, any>;
  panelContent: Record<string, any>;
  contactInfo: Record<string, any>;
  isLoading: boolean;
}

// Criando o contexto com valores padrão
const ContentContext = createContext<ContentContextType>({
  pageContent: {},
  serviceContent: {},
  panelContent: {},
  contactInfo: {},
  isLoading: true,
});

// Hook personalizado para usar o contexto
export const useContent = () => useContext(ContentContext);

// Provedor de conteúdo
export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageContent, setPageContent] = useState({});
  const [serviceContent, setServiceContent] = useState({});
  const [panelContent, setPanelContent] = useState({});
  const [contactInfo, setContactInfo] = useState({});

  // Carregar dados mockados (em uma implementação real, isso viria de uma API)
  useEffect(() => {
    // Simulando uma chamada de API
    const fetchContent = async () => {
      try {
        // Dados mockados para páginas
        const mockPageContent = {
          home: {
            'hero-title': 'Dra. Marcella Vieira',
            'hero-subtitle': 'Médica do Trabalho especializada em perícias médicas e consultoria em saúde ocupacional.',
            'services-title': 'Serviços Especializados',
            'services-subtitle': 'Conheça os serviços de excelência em Medicina do Trabalho e Perícias Médicas.'
          },
          sobre: {
            'title': 'Sobre Dra. Marcella Vieira',
            'subtitle': 'Médica do Trabalho especializada em perícias médicas e consultoria em saúde ocupacional.',
            'bio-title': 'Biografia',
            'bio-content': 'Dra. Marcella Ribeiro Vieira é uma médica especializada em Medicina do Trabalho, com formação sólida e experiência abrangente na área.\n\nGraduada em Medicina pela Universidade de Uberaba (UNIUBE), ela possui registro no Conselho Regional de Medicina sob o número 80479. Sua especialização em Medicina do Trabalho foi realizada na prestigiada Faculdade de Medicina da Universidade de São Paulo (FMUSP/SP), com Registro de Qualificação de Especialista (RQE) número 61114.\n\nAo longo de sua carreira, a Dra. Marcella tem se destacado como Perita Médica Judicial, atuando tanto no Tribunal Regional Federal da Primeira Região (TRF 1) quanto no Tribunal Regional do Trabalho da 3ª Região (TRT 3). Esta experiência lhe proporcionou um conhecimento aprofundado em questões médico-legais e na interface entre medicina e direito.\n\nSua atuação profissional é pautada pela excelência técnica, ética e compromisso com a saúde ocupacional. A Dra. Marcella dedica-se a oferecer serviços de alta qualidade em consultas ocupacionais, consultoria médica, assistência técnica e perícias médicas, sempre com foco na promoção da saúde e segurança no ambiente de trabalho.'
          },
          servicos: {
            'title': 'Serviços',
            'subtitle': 'Conheça os serviços especializados em Medicina do Trabalho e Perícias Médicas oferecidos pela Dra. Marcella Vieira.'
          },
          painel: {
            'title': 'Painel "Medicina do Trabalho Prática e Inteligente"',
            'subtitle': 'Documentos, modelos e templates essenciais para a prática da Medicina do Trabalho e Perícias Médicas.',
            'intro': 'O Painel "Medicina do Trabalho Prática e Inteligente" foi desenvolvido especialmente para profissionais da área de Medicina do Trabalho e Perícias Médicas que buscam praticidade, eficiência e materiais de qualidade para o exercício da sua profissão. Ao adquirir o painel, você terá acesso a um conteúdo exclusivo, composto por documentos cuidadosamente elaborados, prontos para serem utilizados em suas rotinas de trabalho, aumentando sua produtividade e assertividade.',
            'cta-text': 'O Painel não é apenas um conjunto de documentos, mas uma ferramenta de otimização e inovação no seu trabalho. Com ele, você terá à disposição uma verdadeira "biblioteca" de materiais que são constantemente atualizados e alinhados com as necessidades da sua área.\n\nInvestir nesse painel é garantir que você economize tempo e tenha acesso ao melhor conteúdo, ajudando a tornar o seu trabalho mais eficiente, inteligente e com maior impacto na saúde e segurança dos trabalhadores.'
          },
          contato: {
            'title': 'Contato',
            'subtitle': 'Entre em contato para agendar uma consulta, solicitar orçamento ou esclarecer dúvidas.',
            'section-title': 'Fale com a Dra. Marcella Vieira',
            'section-subtitle': 'Estou à disposição para atender às suas necessidades em Medicina do Trabalho e Perícias Médicas.'
          }
        };

        // Dados mockados para serviços
        const mockServiceContent = {
          'consultas-ocupacionais': {
            title: 'Consultas Ocupacionais In Company',
            description: 'Realização de consultas médicas ocupacionais diretamente nas empresas para avaliação da saúde dos trabalhadores proporcionando maior conforto e praticidade, além de garantir a promoção de saúde e cumprimento das disposições legais vigentes.',
            longDescription: 'As consultas ocupacionais in company são uma solução prática e eficiente para empresas que desejam garantir a saúde e segurança de seus colaboradores, além de cumprir com as exigências legais.\n\nAo levar o atendimento médico ocupacional diretamente para o ambiente de trabalho, a Dra. Marcella Vieira proporciona maior conforto e praticidade tanto para a empresa quanto para os trabalhadores, eliminando a necessidade de deslocamentos e reduzindo o tempo de afastamento das atividades laborais.\n\nO serviço inclui a realização de exames admissionais, periódicos, demissionais, de retorno ao trabalho e de mudança de função, conforme estabelecido pela NR-7 (PCMSO). Todos os procedimentos são realizados com equipamentos adequados e seguindo rigorosos protocolos médicos.',
            icon: '/images/service-icon-1.svg',
          },
          'consultoria-medica': {
            title: 'Consultoria Médica',
            description: 'Orientação especializada sobre questões relacionadas à saúde ocupacional e gestão de risco com o objetivo de proporcionar a conformidade com normas de segurança e saúde, além de prevenção de doenças e acidentes.',
            longDescription: 'A consultoria médica oferecida pela Dra. Marcella Vieira é um serviço especializado que visa auxiliar empresas e organizações a implementar e gerenciar programas de saúde ocupacional eficientes, em conformidade com as normas regulamentadoras e com foco na prevenção de doenças e acidentes de trabalho.\n\nCom uma abordagem personalizada e baseada em evidências científicas, a consultoria médica abrange diversos aspectos da saúde ocupacional, desde a elaboração e implementação de programas como o PCMSO (Programa de Controle Médico de Saúde Ocupacional) até a análise de riscos e a proposição de medidas preventivas.',
            icon: '/images/service-icon-2.svg',
          },
          'assistencia-tecnica': {
            title: 'Assistência Técnica Médica',
            description: 'Suporte médico especializado em processos judiciais, fornecendo pareceres, laudos e esclarecimentos técnicos em casos relacionados à saúde.',
            longDescription: 'A Assistência Técnica Médica é um serviço especializado que visa fornecer suporte técnico-científico em processos judiciais que envolvem questões médicas, especialmente nas áreas trabalhista, previdenciária e cível.\n\nComo assistente técnica, a Dra. Marcella Vieira atua representando uma das partes do processo, analisando laudos periciais, elaborando pareceres técnicos e fornecendo esclarecimentos que auxiliam na compreensão dos aspectos médicos envolvidos no caso.',
            icon: '/images/service-icon-3.svg',
          },
          'elaboracao-quesitos': {
            title: 'Elaboração de Quesitos',
            description: 'Desenvolvimento de perguntas técnicas e objetivas para perícias médicas, visando esclarecer pontos fundamentais do caso.',
            longDescription: 'A elaboração de quesitos é um serviço especializado que consiste no desenvolvimento de perguntas técnicas e objetivas a serem respondidas pelo perito médico judicial, com o objetivo de esclarecer pontos fundamentais do caso e obter informações relevantes para a defesa dos interesses do cliente.\n\nOs quesitos são fundamentais no processo pericial, pois direcionam a análise do perito para aspectos específicos que podem ser determinantes para o desfecho do processo. Quando bem elaborados, os quesitos podem contribuir significativamente para a elucidação de questões médicas complexas e para a obtenção de um laudo pericial mais completo e preciso.',
            icon: '/images/service-icon-4.svg',
          },
          'tutoria': {
            title: 'Tutoria em Medicina do Trabalho | Perícias Médicas',
            description: 'Treinamento especializado para profissionais da área de medicina do trabalho e perícias médicas.',
            longDescription: 'A Tutoria em Medicina do Trabalho e Perícias Médicas é um serviço educacional personalizado, voltado para médicos e outros profissionais que desejam aprimorar seus conhecimentos e habilidades nestas áreas específicas.\n\nCom uma abordagem prática e baseada em casos reais, a tutoria oferecida pela Dra. Marcella Vieira proporciona um aprendizado direcionado às necessidades específicas de cada profissional, combinando fundamentação teórica sólida com aplicação prática dos conhecimentos.',
            icon: '/images/service-icon-5.svg',
          },
          'palestras': {
            title: 'Palestras',
            description: 'Sessões educativas e personalizadas sobre saúde ocupacional, prevenção de doenças e segurança no trabalho.',
            longDescription: 'As palestras ministradas pela Dra. Marcella Vieira são sessões educativas e informativas sobre temas relacionados à saúde ocupacional, prevenção de doenças e segurança no trabalho, adaptadas às necessidades específicas de cada público e organização.\n\nCom uma abordagem dinâmica e acessível, as palestras combinam conhecimento técnico-científico com exemplos práticos, proporcionando aos participantes uma compreensão clara e aplicável dos temas abordados.',
            icon: '/images/service-icon-6.svg',
          }
        };

        // Dados mockados para o painel
        const mockPanelContent = {
          documents: [
            {
              title: 'Modelo Ficha Clínica Ocupacional',
              description: 'Exame Admissional, Periódico, Demissional, Mudança de Função e Retorno ao Trabalho com as principais informações para constar no prontuário e te proteger juridicamente.',
              icon: '/images/document-icon-1.svg'
            },
            {
              title: 'Modelo Ficha Clínica para atendimentos em Saúde Mental',
              description: 'Registro completo, organizado e seguro das informações durante os atendimentos psicológicos e psiquiátricos.',
              icon: '/images/document-icon-2.svg'
            },
            {
              title: 'Modelo Ficha Clínica para atendimentos em Ortopedia',
              description: 'Registro completo, organizado e seguro das informações dos trabalhadores ou periciandos durante os atendimentos com foco em avaliação ortopédica.',
              icon: '/images/document-icon-3.svg'
            },
            {
              title: 'Modelo de Encaminhamento ao INSS',
              description: 'Desenvolvido para médicos do trabalho, examinadores e médicos assistentes, garantindo um processo ágil e assertivo.',
              icon: '/images/document-icon-4.svg'
            }
          ],
          benefits: [
            {
              title: 'Praticidade',
              description: 'Todos os documentos estão prontos para uso, bastando apenas fazer o download e personalizar conforme necessário.',
              icon: 'FaCheckCircle'
            },
            {
              title: 'Qualidade e Atualização',
              description: 'Conteúdo elaborado por especialistas com experiência na área, garantindo acesso às melhores práticas e informações atualizadas.',
              icon: 'FaShieldAlt'
            },
            {
              title: 'Economia de Tempo',
              description: 'Otimize o tempo dedicado à criação de documentos, permitindo que se concentre no que realmente importa: o atendimento e a qualidade das suas análises.',
              icon: 'FaClock'
            },
            {
              title: 'Acessibilidade',
              description: 'Acesso a materiais de alta qualidade por um valor acessível, sem precisar buscar ou pagar por diferentes fontes de informação.',
              icon: 'FaAccessibleIcon'
            }
          ]
        };

        // Dados mockados para informações de contato
        const mockContactInfo = {
          phone: '(XX) XXXXX-XXXX',
          whatsapp: '(XX) XXXXX-XXXX',
          email: 'contato@dramarcellavieira.com.br',
          instagram: 'https://instagram.com/dramarcellavieira',
          linkedin: 'https://linkedin.com/in/dramarcellavieira',
          salesPageUrl: 'https://exemplo-pagina-vendas.com'
        };

        // Atualizar o estado com os dados mockados
        setPageContent(mockPageContent);
        setServiceContent(mockServiceContent);
        setPanelContent(mockPanelContent);
        setContactInfo(mockContactInfo);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <ContentContext.Provider
      value={{
        pageContent,
        serviceContent,
        panelContent,
        contactInfo,
        isLoading
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
