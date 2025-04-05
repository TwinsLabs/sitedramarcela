'use client';

import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

interface PanelDocument {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface PanelBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function PainelAdmin() {
  const [activeTab, setActiveTab] = useState<'intro' | 'documents' | 'benefits'>('intro');
  const [introContent, setIntroContent] = useState<{id: string, title: string, content: string}[]>([]);
  const [documents, setDocuments] = useState<PanelDocument[]>([]);
  const [benefits, setBenefits] = useState<PanelBenefit[]>([]);
  
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editedField, setEditedField] = useState<string>('');
  const [editedValue, setEditedValue] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Dados mockados para simular o conteúdo do painel
  useEffect(() => {
    // Conteúdo introdutório
    const mockIntroContent = [
      {
        id: 'painel-title',
        title: 'Título da Página',
        content: 'Painel "Medicina do Trabalho Prática e Inteligente"'
      },
      {
        id: 'painel-subtitle',
        title: 'Subtítulo da Página',
        content: 'Documentos, modelos e templates essenciais para a prática da Medicina do Trabalho e Perícias Médicas.'
      },
      {
        id: 'painel-intro-text',
        title: 'Texto de Introdução',
        content: 'O Painel "Medicina do Trabalho Prática e Inteligente" foi desenvolvido especialmente para profissionais da área de Medicina do Trabalho e Perícias Médicas que buscam praticidade, eficiência e materiais de qualidade para o exercício da sua profissão. Ao adquirir o painel, você terá acesso a um conteúdo exclusivo, composto por documentos cuidadosamente elaborados, prontos para serem utilizados em suas rotinas de trabalho, aumentando sua produtividade e assertividade.\n\nAo adquirir o painel, você poderá realizar o download de materiais diversos, como modelos, templates, checklists e relatórios essenciais para a Medicina do Trabalho e Perícias Médicas. Esses materiais foram criados com base nas melhores práticas da área e visam facilitar o seu dia a dia, economizando tempo e garantindo que você esteja sempre atualizado com as exigências legais e profissionais.'
      },
      {
        id: 'painel-cta-text',
        title: 'Texto do CTA',
        content: 'O Painel não é apenas um conjunto de documentos, mas uma ferramenta de otimização e inovação no seu trabalho. Com ele, você terá à disposição uma verdadeira "biblioteca" de materiais que são constantemente atualizados e alinhados com as necessidades da sua área.\n\nInvestir nesse painel é garantir que você economize tempo e tenha acesso ao melhor conteúdo, ajudando a tornar o seu trabalho mais eficiente, inteligente e com maior impacto na saúde e segurança dos trabalhadores.'
      }
    ];

    // Documentos do painel
    const mockDocuments = [
      {
        id: 'doc1',
        title: 'Modelo Ficha Clínica Ocupacional',
        description: 'Exame Admissional, Periódico, Demissional, Mudança de Função e Retorno ao Trabalho com as principais informações para constar no prontuário e te proteger juridicamente.',
        icon: '/images/document-icon-1.svg'
      },
      {
        id: 'doc2',
        title: 'Modelo Ficha Clínica para atendimentos em Saúde Mental',
        description: 'Registro completo, organizado e seguro das informações durante os atendimentos psicológicos e psiquiátricos.',
        icon: '/images/document-icon-2.svg'
      },
      {
        id: 'doc3',
        title: 'Modelo Ficha Clínica para atendimentos em Ortopedia',
        description: 'Registro completo, organizado e seguro das informações dos trabalhadores ou periciandos durante os atendimentos com foco em avaliação ortopédica.',
        icon: '/images/document-icon-3.svg'
      },
      {
        id: 'doc4',
        title: 'Modelo de Encaminhamento ao INSS',
        description: 'Desenvolvido para médicos do trabalho, examinadores e médicos assistentes, garantindo um processo ágil e assertivo.',
        icon: '/images/document-icon-4.svg'
      }
    ];

    // Benefícios do painel
    const mockBenefits = [
      {
        id: 'ben1',
        title: 'Praticidade',
        description: 'Todos os documentos estão prontos para uso, bastando apenas fazer o download e personalizar conforme necessário.',
        icon: 'FaCheckCircle'
      },
      {
        id: 'ben2',
        title: 'Qualidade e Atualização',
        description: 'Conteúdo elaborado por especialistas com experiência na área, garantindo acesso às melhores práticas e informações atualizadas.',
        icon: 'FaShieldAlt'
      },
      {
        id: 'ben3',
        title: 'Economia de Tempo',
        description: 'Otimize o tempo dedicado à criação de documentos, permitindo que se concentre no que realmente importa: o atendimento e a qualidade das suas análises.',
        icon: 'FaClock'
      },
      {
        id: 'ben4',
        title: 'Acessibilidade',
        description: 'Acesso a materiais de alta qualidade por um valor acessível, sem precisar buscar ou pagar por diferentes fontes de informação.',
        icon: 'FaAccessibleIcon'
      }
    ];

    setIntroContent(mockIntroContent);
    setDocuments(mockDocuments);
    setBenefits(mockBenefits);
  }, []);

  const handleEditClick = (id: string, field: string, value: string) => {
    setEditingItem(id);
    setEditedField(field);
    setEditedValue(value);
    setSuccessMessage('');
  };

  const handleSaveClick = (id: string, type: 'intro' | 'document' | 'benefit') => {
    if (type === 'intro') {
      // Atualizar o conteúdo introdutório
      const updatedIntro = introContent.map(item => {
        if (item.id === id) {
          return { ...item, content: editedValue };
        }
        return item;
      });
      setIntroContent(updatedIntro);
    } else if (type === 'document') {
      // Atualizar o documento
      const updatedDocuments = documents.map(doc => {
        if (doc.id === id) {
          return { ...doc, [editedField]: editedValue };
        }
        return doc;
      });
      setDocuments(updatedDocuments);
    } else if (type === 'benefit') {
      // Atualizar o benefício
      const updatedBenefits = benefits.map(ben => {
        if (ben.id === id) {
          return { ...ben, [editedField]: editedValue };
        }
        return ben;
      });
      setBenefits(updatedBenefits);
    }
    
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
      <h1 className="text-3xl font-serif text-[#394240] mb-6">Gerenciar Painel</h1>
      
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex mb-6 border-b pb-4">
          <button
            onClick={() => setActiveTab('intro')}
            className={`mr-4 px-4 py-2 rounded-md ${
              activeTab === 'intro'
                ? 'bg-[#5C6857] text-white'
                : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
            }`}
          >
            Introdução
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`mr-4 px-4 py-2 rounded-md ${
              activeTab === 'documents'
                ? 'bg-[#5C6857] text-white'
                : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
            }`}
          >
            Documentos
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`mr-4 px-4 py-2 rounded-md ${
              activeTab === 'benefits'
                ? 'bg-[#5C6857] text-white'
                : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
            }`}
          >
            Benefícios
          </button>
        </div>
        
        {/* Conteúdo da aba Introdução */}
        {activeTab === 'intro' && (
          <div className="space-y-6">
            {introContent.map(item => (
              <div key={item.id} className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-[#394240]">{item.title}</h3>
                  {editingItem !== item.id ? (
                    <button
                      onClick={() => handleEditClick(item.id, 'content', item.content)}
                      className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                    >
                      <FaEdit className="mr-1" /> Editar
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSaveClick(item.id, 'intro')}
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
                
                {editingItem === item.id ? (
                  <textarea
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
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
        )}
        
        {/* Conteúdo da aba Documentos */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            {documents.map(doc => (
              <div key={doc.id} className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img 
                      src={doc.icon} 
                      alt={doc.title} 
                      className="w-10 h-10 mr-4"
                    />
                    <h3 className="text-lg font-medium text-[#394240]">{doc.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-[#394240]">Título</h4>
                      {editingItem !== `${doc.id}-title` ? (
                        <button
                          onClick={() => handleEditClick(`${doc.id}-title`, 'title', doc.title)}
                          className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                        >
                          <FaEdit className="mr-1" /> Editar
                        </button>
                      ) : (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleSaveClick(doc.id, 'document')}
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
                    
                    {editingItem === `${doc.id}-title` ? (
                      <input
                        type="text"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
                      />
                    ) : (
                      <div className="bg-gray-50 p-3 rounded-md">
                        {doc.title}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-[#394240]">Descrição</h4>
                      {editingItem !== `${doc.id}-description` ? (
                        <button
                          onClick={() => handleEditClick(`${doc.id}-description`, 'description', doc.description)}
                          className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                        >
                          <FaEdit className="mr-1" /> Editar
                        </button>
                      ) : (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleSaveClick(doc.id, 'document')}
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
                    
                    {editingItem === `${doc.id}-description` ? (
                      <textarea
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857] min-h-[100px]"
                      />
                    ) : (
                      <div className="bg-gray-50 p-3 rounded-md">
                        {doc.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Conteúdo da aba Benefícios */}
        {activeTab === 'benefits' && (
          <div className="space-y-6">
            {benefits.map(ben => (
              <div key={ben.id} className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-[#394240]">{ben.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-[#394240]">Título</h4>
                      {editingItem !== `${ben.id}-title` ? (
                        <button
                          onClick={() => handleEditClick(`${ben.id}-title`, 'title', ben.title)}
                          className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                        >
                          <FaEdit className="mr-1" /> Editar
                        </button>
                      ) : (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleSaveClick(ben.id, 'benefit')}
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
                    
                    {editingItem === `${ben.id}-title` ? (
                      <input
                        type="text"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
                      />
                    ) : (
                      <div className="bg-gray-50 p-3 rounded-md">
                        {ben.title}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-[#394240]">Descrição</h4>
                      {editingItem !== `${ben.id}-description` ? (
                        <button
                          onClick={() => handleEditClick(`${ben.id}-description`, 'description', ben.description)}
                          className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                        >
                          <FaEdit className="mr-1" /> Editar
                        </button>
                      ) : (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleSaveClick(ben.id, 'benefit')}
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
                    
                    {editingItem === `${ben.id}-description` ? (
                      <textarea
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857] min-h-[100px]"
                      />
                    ) : (
                      <div className="bg-gray-50 p-3 rounded-md">
                        {ben.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
