'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

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
export const ContentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
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
            'hero-subtitle':
              'Médica do Trabalho especializada em perícias médicas e consultoria em saúde ocupacional.',
            'services-title': 'Serviços Especializados',
            'services-subtitle':
              'Conheça os serviços de excelência em Medicina do Trabalho e Perícias Médicas.',
          },
          sobre: {
            title: 'Sobre Dra. Marcella Vieira',
            subtitle:
              'Médica do Trabalho e Perita Médica CRM 80479 | RQE 61114',
            'bio-title': 'Biografia',
            'bio-content':
              'Médica formada pela Universidade de Uberaba (UNIUBE), Especialista em Medicina do Trabalho pela Faculdade de Medicina da Universidade de São Paulo (FMUSP) e Titulada como Médica do Trabalho pela Associação Médica Brasileira (AMB) e Associação Nacional de Medicina do Trabalho (ANAMT).\n\nAtua como Médica do Trabalho e Médica Perita Judicial no Tribunal Regional Federal da 6ª Região (TRF6) e no Tribunal Regional do Trabalho da 3ª Região (TRT3).\n\nAtualmente, dedica-se à construção de uma Medicina do Trabalho pautada na ética, excelência e justiça, com foco na valorização das boas práticas médicas. Seu principal objetivo é promover saúde no ambiente de trabalho, contribuindo de forma ativa para a redução de adoecimentos e, consequentemente, do absenteísmo.\n\nTem se destacado também na promoção da inclusão de pessoas com deficiência no mercado de trabalho, buscando compreender profundamente suas necessidades e colaborando no desenvolvimento de projetos estruturados e humanizados de inclusão, que garantam acessibilidade, respeito e oportunidades reais.\n\nCom a inovação como aliada estratégica, atua na implementação de soluções modernas e eficazes, que atendem tanto às demandas das empresas quanto aos direitos e bem-estar dos trabalhadores.\n\nComo Médica Perita, atua com responsabilidade técnica, sensibilidade e imparcialidade. Realiza avaliações criteriosas, sempre amparadas em evidências científicas e na legislação vigente, assegurando a integridade dos processos e o respeito às particularidades de cada caso.\n\nSeu compromisso é oferecer laudos claros, fundamentados e éticos, que contribuam para decisões justas por parte das instituições e garantam os direitos dos envolvidos. Acredita que a perícia médica deve ser um instrumento de verdade, equilíbrio e respeito à dignidade humana.\n\nProfessora de Ética Médica e uma das representantes mais jovens a se destacar na área da Medicina do Trabalho, atua com paixão pelo ensino e pela formação de profissionais conscientes, comprometidos e éticos. Compartilha sua vivência prática com sensibilidade e profundidade, estimulando reflexões que vão além do conteúdo técnico, alcançando os valores humanos que sustentam a boa prática médica.\n\nCom um olhar inovador e uma postura inspiradora, tem se consolidado como referência entre as novas gerações, sendo pioneira em iniciativas que unem conhecimento, empatia e responsabilidade social. Seu propósito vai além do presente: deseja construir um legado significativo na Medicina do Trabalho, promovendo uma cultura de saúde, respeito e dignidade para todos os trabalhadores.',
          },
          servicos: {
            title: 'Serviços',
            subtitle:
              'Conheça os serviços especializados em Medicina do Trabalho e Perícias Médicas oferecidos pela Dra. Marcella Vieira.',
          },
          painel: {
            title:
              'Painel "Medicina do Trabalho Prática e Inteligente"',
            subtitle:
              'Documentos, modelos e templates essenciais para a prática da Medicina do Trabalho e Perícias Médicas.',
            intro:
              'O Painel "Medicina do Trabalho Prática e Inteligente" foi desenvolvido especialmente para profissionais da área de Medicina do Trabalho e Perícias Médicas que buscam praticidade, eficiência e materiais de qualidade para o exercício da sua profissão. Ao adquirir o painel, você terá acesso a um conteúdo exclusivo, composto por documentos cuidadosamente elaborados, prontos para serem utilizados em suas rotinas de trabalho, aumentando sua produtividade e assertividade.',
            'cta-text':
              'O Painel não é apenas um conjunto de documentos, mas uma ferramenta de otimização e inovação no seu trabalho. Com ele, você terá à disposição uma verdadeira "biblioteca" de materiais que são constantemente atualizados e alinhados com as necessidades da sua área.\n\nInvestir nesse painel é garantir que você economize tempo e tenha acesso ao melhor conteúdo, ajudando a tornar o seu trabalho mais eficiente, inteligente e com maior impacto na saúde e segurança dos trabalhadores.',
          },
          contato: {
            title: 'Contato',
            subtitle:
              'Entre em contato para agendar uma consulta, solicitar orçamento ou esclarecer dúvidas.',
            'section-title': 'Fale com a Dra. Marcella Vieira',
            'section-subtitle':
              'Estou à disposição para atender às suas necessidades em Medicina do Trabalho e Perícias Médicas.',
          },
        };

        // Dados mockados para serviços
        const mockServiceContent = {
          'consultas-ocupacionais': {
            title: 'Consultas Ocupacionais In Company',
            description:
              'Realização de consultas médicas ocupacionais diretamente nas empresas para avaliação da saúde dos trabalhadores proporcionando maior conforto e praticidade, além de garantir a promoção de saúde e cumprimento das disposições legais vigentes.',
            longDescription:
              'Realização de consultas médicas ocupacionais diretamente nas empresas para avaliação da saúde dos trabalhadores proporcionando maior conforto e praticidade, além de garantir a promoção de saúde e cumprimento das disposições legais vigentes.',
            icon: '/images/icons/medicine-icon.svg',
          },
          'consultoria-medica': {
            title: 'Consultoria Médica',
            description:
              'Orientação especializada sobre questões relacionadas à saúde ocupacional e gestão de risco com o objetivo de proporcionar a conformidade com normas de segurança e saúde, além de prevenção de doenças e acidentes.',
            longDescription:
              'Orientação especializada sobre questões relacionadas à saúde ocupacional e gestão de risco com o objetivo de proporcionar a conformidade com normas de segurança e saúde, além de prevenção de doenças e acidentes.',
            icon: '/images/icons/health-icon.svg',
          },
          'assistencia-tecnica': {
            title: 'Assistência Técnica Médica',
            description:
              'Suporte médico especializado em processos judiciais, fornecendo pareceres, laudos e esclarecimentos técnicos em casos relacionados à saúde.',
            longDescription:
              'Suporte médico especializado em processos judiciais, fornecendo pareceres, laudos e esclarecimentos técnicos em casos relacionados à saúde.',
            icon: '/images/icons/medical-exam-icon.svg',
          },
          'elaboracao-quesitos': {
            title: 'Elaboração de Quesitos',
            description:
              'Desenvolvimento de perguntas técnicas e objetivas para perícias médicas, visando esclarecer pontos fundamentais do caso.',
            longDescription:
              'Desenvolvimento de perguntas técnicas e objetivas para perícias médicas, visando esclarecer pontos fundamentais do caso.',
            icon: '/images/icons/medical-exam-icon.svg',
          },
          tutoria: {
            title:
              'Tutoria em Medicina do Trabalho | Perícias Médicas',
            description:
              'Treinamento especializado para profissionais da área de Medicina do Trabalho e Perícias Médicas.',
            longDescription:
              'Treinamento especializado para profissionais da área de Medicina do Trabalho e Perícias Médicas.',
            icon: '/images/icons/psychology-icon.svg',
          },
          palestras: {
            title: 'Palestras',
            description:
              'Sessões educativas e personalizadas sobre saúde ocupacional, prevenção de doenças e segurança no trabalho.',
            longDescription:
              'Sessões educativas e personalizadas sobre saúde ocupacional, prevenção de doenças e segurança no trabalho.',
            icon: '/images/icons/service-icon.svg',
          },
        };

        // Dados mockados para o painel
        const mockPanelContent = {
          documents: [
            {
              title: 'Modelo Ficha Clínica Ocupacional',
              description:
                'Exame Admissional, Periódico, Demissional, Mudança de Função e Retorno ao Trabalho com as principais informações para constar no prontuário e te proteger juridicamente.',
              icon: '/images/document-icon-1.svg',
            },
            {
              title:
                'Modelo Ficha Clínica para atendimentos em Saúde Mental',
              description:
                'Registro completo, organizado e seguro das informações durante os atendimentos psicológicos e psiquiátricos.',
              icon: '/images/document-icon-2.svg',
            },
            {
              title:
                'Modelo Ficha Clínica para atendimentos em Ortopedia',
              description:
                'Registro completo, organizado e seguro das informações dos trabalhadores ou periciandos durante os atendimentos com foco em avaliação ortopédica.',
              icon: '/images/document-icon-3.svg',
            },
            {
              title: 'Modelo de Encaminhamento ao INSS',
              description:
                'Desenvolvido para médicos do trabalho, examinadores e médicos assistentes, garantindo um processo ágil e assertivo.',
              icon: '/images/document-icon-4.svg',
            },
          ],
          benefits: [
            {
              title: 'Praticidade',
              description:
                'Todos os documentos estão prontos para uso, bastando apenas fazer o download e personalizar conforme necessário.',
              icon: 'FaCheckCircle',
            },
            {
              title: 'Qualidade e Atualização',
              description:
                'Conteúdo elaborado por especialistas com experiência na área, garantindo acesso às melhores práticas e informações atualizadas.',
              icon: 'FaShieldAlt',
            },
            {
              title: 'Economia de Tempo',
              description:
                'Otimize o tempo dedicado à criação de documentos, permitindo que se concentre no que realmente importa: o atendimento e a qualidade das suas análises.',
              icon: 'FaClock',
            },
            {
              title: 'Acessibilidade',
              description:
                'Acesso a materiais de alta qualidade por um valor acessível, sem precisar buscar ou pagar por diferentes fontes de informação.',
              icon: 'FaAccessibleIcon',
            },
          ],
        };

        // Dados mockados para informações de contato
        const mockContactInfo = {
          phone: '(XX) XXXXX-XXXX',
          whatsapp: '(XX) XXXXX-XXXX',
          email: 'contato@dramarcellavieira.com.br',
          instagram: 'https://instagram.com/dramarcellavieira',
          linkedin: 'https://linkedin.com/in/dramarcellavieira',
          salesPageUrl: 'https://exemplo-pagina-vendas.com',
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
        isLoading,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
