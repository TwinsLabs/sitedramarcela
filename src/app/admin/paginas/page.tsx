'use client';

import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

interface ContentItem {
  id: string;
  title: string;
  content: string;
  section: string;
  page: string;
}

export default function PaginasAdmin() {
  const [pages, setPages] = useState<string[]>([
    'home',
    'sobre',
    'servicos',
    'painel',
    'contato',
  ]);
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editedContent, setEditedContent] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Dados mockados para simular o conteúdo das páginas
  useEffect(() => {
    const mockContent: Record<string, ContentItem[]> = {
      home: [
        {
          id: 'home-hero-title',
          title: 'Título do Hero',
          content: 'Dra. Marcella Vieira',
          section: 'hero',
          page: 'home',
        },
        {
          id: 'home-hero-subtitle',
          title: 'Subtítulo do Hero',
          content:
            'Médica do Trabalho especializada em perícias médicas e consultoria em saúde ocupacional.',
          section: 'hero',
          page: 'home',
        },
        {
          id: 'home-services-title',
          title: 'Título da Seção de Serviços',
          content: 'Serviços Especializados',
          section: 'services',
          page: 'home',
        },
        {
          id: 'home-services-subtitle',
          title: 'Subtítulo da Seção de Serviços',
          content:
            'Conheça os serviços de excelência em Medicina do Trabalho e Perícias Médicas.',
          section: 'services',
          page: 'home',
        },
      ],
      sobre: [
        {
          id: 'sobre-title',
          title: 'Título da Página',
          content: 'Sobre Dra. Marcella Vieira',
          section: 'header',
          page: 'sobre',
        },
        {
          id: 'sobre-subtitle',
          title: 'Subtítulo da Página',
          content:
            'Médica do Trabalho especializada em perícias médicas e consultoria em saúde ocupacional.',
          section: 'header',
          page: 'sobre',
        },
        {
          id: 'sobre-bio-title',
          title: 'Título da Biografia',
          content: 'Biografia',
          section: 'bio',
          page: 'sobre',
        },
        {
          id: 'sobre-bio-content',
          title: 'Conteúdo da Biografia',
          content:
            'Dra. Marcella Ribeiro Vieira é uma médica especializada em Medicina do Trabalho, com formação sólida e experiência abrangente na área.\n\nGraduada em Medicina pela Universidade de Uberaba (UNIUBE), ela possui registro no Conselho Regional de Medicina sob o número 80479. Sua especialização em Medicina do Trabalho foi realizada na prestigiada Faculdade de Medicina da Universidade de São Paulo (FMUSP/SP), com Registro de Qualificação de Especialista (RQE) número 61114.\n\nAo longo de sua carreira, a Dra. Marcella tem se destacado como Perita Médica Judicial, atuando tanto no Tribunal Regional Federal da 6ª Região (TRF6) quanto no Tribunal Regional do Trabalho da 3ª Região (TRT 3). Esta experiência lhe proporcionou um conhecimento aprofundado em questões médico-legais e na interface entre medicina e direito.\n\nSua atuação profissional é pautada pela excelência técnica, ética e compromisso com a saúde ocupacional. A Dra. Marcella dedica-se a oferecer serviços de alta qualidade em consultas ocupacionais, consultoria médica, assistência técnica e perícias médicas, sempre com foco na promoção da saúde e segurança no ambiente de trabalho.',
          section: 'bio',
          page: 'sobre',
        },
      ],
      servicos: [
        {
          id: 'servicos-title',
          title: 'Título da Página',
          content: 'Serviços',
          section: 'header',
          page: 'servicos',
        },
        {
          id: 'servicos-subtitle',
          title: 'Subtítulo da Página',
          content:
            'Conheça os serviços especializados em Medicina do Trabalho e Perícias Médicas oferecidos pela Dra. Marcella Vieira.',
          section: 'header',
          page: 'servicos',
        },
      ],
      painel: [
        {
          id: 'painel-title',
          title: 'Título da Página',
          content:
            'Painel "Medicina do Trabalho Prática e Inteligente"',
          section: 'header',
          page: 'painel',
        },
        {
          id: 'painel-subtitle',
          title: 'Subtítulo da Página',
          content:
            'Documentos, modelos e templates essenciais para a prática da Medicina do Trabalho e Perícias Médicas.',
          section: 'header',
          page: 'painel',
        },
        {
          id: 'painel-intro',
          title: 'Introdução',
          content:
            'O Painel "Medicina do Trabalho Prática e Inteligente" foi desenvolvido especialmente para profissionais da área de Medicina do Trabalho e Perícias Médicas que buscam praticidade, eficiência e materiais de qualidade para o exercício da sua profissão. Ao adquirir o painel, você terá acesso a um conteúdo exclusivo, composto por documentos cuidadosamente elaborados, prontos para serem utilizados em suas rotinas de trabalho, aumentando sua produtividade e assertividade.',
          section: 'intro',
          page: 'painel',
        },
      ],
      contato: [
        {
          id: 'contato-title',
          title: 'Título da Página',
          content: 'Contato',
          section: 'header',
          page: 'contato',
        },
        {
          id: 'contato-subtitle',
          title: 'Subtítulo da Página',
          content:
            'Entre em contato para agendar uma consulta, solicitar orçamento ou esclarecer dúvidas.',
          section: 'header',
          page: 'contato',
        },
        {
          id: 'contato-section-title',
          title: 'Título da Seção de Contato',
          content: 'Fale com a Dra. Marcella Vieira',
          section: 'contact',
          page: 'contato',
        },
        {
          id: 'contato-section-subtitle',
          title: 'Subtítulo da Seção de Contato',
          content:
            'Estou à disposição para atender às suas necessidades em Medicina do Trabalho e Perícias Médicas.',
          section: 'contact',
          page: 'contato',
        },
      ],
    };

    setContentItems(mockContent[selectedPage] || []);
  }, [selectedPage]);

  const handlePageChange = (page: string) => {
    setSelectedPage(page);
    setEditingItem(null);
    setSuccessMessage('');
  };

  const handleEditClick = (id: string, content: string) => {
    setEditingItem(id);
    setEditedContent(content);
    setSuccessMessage('');
  };

  const handleSaveClick = (id: string) => {
    // Atualizar o conteúdo no estado
    const updatedItems = contentItems.map((item) => {
      if (item.id === id) {
        return { ...item, content: editedContent };
      }
      return item;
    });

    setContentItems(updatedItems);
    setEditingItem(null);
    setSuccessMessage('Conteúdo atualizado com sucesso!');

    // Em uma implementação real, aqui seria feita uma chamada à API para salvar as alterações
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleCancelClick = () => {
    setEditingItem(null);
    setSuccessMessage('');
  };

  return (
    <div>
      <h1 className="text-3xl font-serif text-[#394240] mb-6">
        Gerenciar Páginas
      </h1>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex mb-6 border-b pb-4">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mr-4 px-4 py-2 rounded-md capitalize ${
                selectedPage === page
                  ? 'bg-[#5C6857] text-white'
                  : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {contentItems.map((item) => (
            <div key={item.id} className="border rounded-md p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-[#394240]">
                  {item.title}
                </h3>
                {editingItem !== item.id ? (
                  <button
                    onClick={() =>
                      handleEditClick(item.id, item.content)
                    }
                    className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                  >
                    <FaEdit className="mr-1" /> Editar
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSaveClick(item.id)}
                      className="flex items-center text-green-600 hover:text-green-800"
                    >
                      <FaSave className="mr-1" /> Salvar
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="flex items-center text-red-600 hover:text-red-800"
                    >
                      <FaTimes className="mr-1" /> Cancelar
                    </button>
                  </div>
                )}
              </div>

              <div className="text-sm text-gray-500 mb-2">
                Seção:{' '}
                <span className="capitalize">{item.section}</span>
              </div>

              {editingItem === item.id ? (
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857] min-h-[150px]"
                />
              ) : (
                <div className="bg-gray-50 p-3 rounded-md whitespace-pre-wrap">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
