'use client';

import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  slug: string;
}

export default function ServicosAdmin() {
  const [services, setServices] = useState<Service[]>([]);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editedField, setEditedField] = useState<string>('');
  const [editedValue, setEditedValue] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Dados mockados para simular os serviços
  useEffect(() => {
    const mockServices: Service[] = [
      {
        id: '1',
        title: 'Consultas Ocupacionais In Company',
        description: 'Realização de consultas médicas ocupacionais diretamente nas empresas para avaliação da saúde dos trabalhadores proporcionando maior conforto e praticidade, além de garantir a promoção de saúde e cumprimento das disposições legais vigentes.',
        longDescription: 'As consultas ocupacionais in company são uma solução prática e eficiente para empresas que desejam garantir a saúde e segurança de seus colaboradores, além de cumprir com as exigências legais.\n\nAo levar o atendimento médico ocupacional diretamente para o ambiente de trabalho, a Dra. Marcella Vieira proporciona maior conforto e praticidade tanto para a empresa quanto para os trabalhadores, eliminando a necessidade de deslocamentos e reduzindo o tempo de afastamento das atividades laborais.\n\nO serviço inclui a realização de exames admissionais, periódicos, demissionais, de retorno ao trabalho e de mudança de função, conforme estabelecido pela NR-7 (PCMSO). Todos os procedimentos são realizados com equipamentos adequados e seguindo rigorosos protocolos médicos.',
        icon: '/images/service-icon-1.svg',
        slug: 'consultas-ocupacionais'
      },
      {
        id: '2',
        title: 'Consultoria Médica',
        description: 'Orientação especializada sobre questões relacionadas à saúde ocupacional e gestão de risco com o objetivo de proporcionar a conformidade com normas de segurança e saúde, além de prevenção de doenças e acidentes.',
        longDescription: 'A consultoria médica oferecida pela Dra. Marcella Vieira é um serviço especializado que visa auxiliar empresas e organizações a implementar e gerenciar programas de saúde ocupacional eficientes, em conformidade com as normas regulamentadoras e com foco na prevenção de doenças e acidentes de trabalho.\n\nCom uma abordagem personalizada e baseada em evidências científicas, a consultoria médica abrange diversos aspectos da saúde ocupacional, desde a elaboração e implementação de programas como o PCMSO (Programa de Controle Médico de Saúde Ocupacional) até a análise de riscos e a proposição de medidas preventivas.',
        icon: '/images/service-icon-2.svg',
        slug: 'consultoria-medica'
      },
      {
        id: '3',
        title: 'Assistência Técnica Médica',
        description: 'Suporte médico especializado em processos judiciais, fornecendo pareceres, laudos e esclarecimentos técnicos em casos relacionados à saúde.',
        longDescription: 'A Assistência Técnica Médica é um serviço especializado que visa fornecer suporte técnico-científico em processos judiciais que envolvem questões médicas, especialmente nas áreas trabalhista, previdenciária e cível.\n\nComo assistente técnica, a Dra. Marcella Vieira atua representando uma das partes do processo, analisando laudos periciais, elaborando pareceres técnicos e fornecendo esclarecimentos que auxiliam na compreensão dos aspectos médicos envolvidos no caso.',
        icon: '/images/service-icon-3.svg',
        slug: 'assistencia-tecnica'
      },
      {
        id: '4',
        title: 'Elaboração de Quesitos',
        description: 'Desenvolvimento de perguntas técnicas e objetivas para perícias médicas, visando esclarecer pontos fundamentais do caso.',
        longDescription: 'A elaboração de quesitos é um serviço especializado que consiste no desenvolvimento de perguntas técnicas e objetivas a serem respondidas pelo perito médico judicial, com o objetivo de esclarecer pontos fundamentais do caso e obter informações relevantes para a defesa dos interesses do cliente.\n\nOs quesitos são fundamentais no processo pericial, pois direcionam a análise do perito para aspectos específicos que podem ser determinantes para o desfecho do processo. Quando bem elaborados, os quesitos podem contribuir significativamente para a elucidação de questões médicas complexas e para a obtenção de um laudo pericial mais completo e preciso.',
        icon: '/images/service-icon-4.svg',
        slug: 'elaboracao-quesitos'
      },
      {
        id: '5',
        title: 'Tutoria em Medicina do Trabalho | Perícias Médicas',
        description: 'Treinamento especializado para profissionais da área de medicina do trabalho e perícias médicas.',
        longDescription: 'A Tutoria em Medicina do Trabalho e Perícias Médicas é um serviço educacional personalizado, voltado para médicos e outros profissionais que desejam aprimorar seus conhecimentos e habilidades nestas áreas específicas.\n\nCom uma abordagem prática e baseada em casos reais, a tutoria oferecida pela Dra. Marcella Vieira proporciona um aprendizado direcionado às necessidades específicas de cada profissional, combinando fundamentação teórica sólida com aplicação prática dos conhecimentos.',
        icon: '/images/service-icon-5.svg',
        slug: 'tutoria'
      },
      {
        id: '6',
        title: 'Palestras',
        description: 'Sessões educativas e personalizadas sobre saúde ocupacional, prevenção de doenças e segurança no trabalho.',
        longDescription: 'As palestras ministradas pela Dra. Marcella Vieira são sessões educativas e informativas sobre temas relacionados à saúde ocupacional, prevenção de doenças e segurança no trabalho, adaptadas às necessidades específicas de cada público e organização.\n\nCom uma abordagem dinâmica e acessível, as palestras combinam conhecimento técnico-científico com exemplos práticos, proporcionando aos participantes uma compreensão clara e aplicável dos temas abordados.',
        icon: '/images/service-icon-6.svg',
        slug: 'palestras'
      }
    ];

    setServices(mockServices);
  }, []);

  const handleEditClick = (id: string, field: string, value: string) => {
    setEditingItem(id);
    setEditedField(field);
    setEditedValue(value);
    setSuccessMessage('');
  };

  const handleSaveClick = (id: string) => {
    // Atualizar o serviço no estado
    const updatedServices = services.map(service => {
      if (service.id === id) {
        return { 
          ...service, 
          [editedField]: editedValue 
        };
      }
      return service;
    });
    
    setServices(updatedServices);
    setEditingItem(null);
    setSuccessMessage('Serviço atualizado com sucesso!');
    
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
      <h1 className="text-3xl font-serif text-[#394240] mb-6">Gerenciar Serviços</h1>
      
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="space-y-8">
          {services.map(service => (
            <div key={service.id} className="border rounded-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-10 h-10 mr-4"
                  />
                  <h3 className="text-xl font-serif text-[#394240]">{service.title}</h3>
                </div>
                <div className="text-sm text-gray-500">
                  Slug: {service.slug}
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-[#394240]">Título</h4>
                    {editingItem !== service.id || editedField !== 'title' ? (
                      <button
                        onClick={() => handleEditClick(service.id, 'title', service.title)}
                        className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                      >
                        <FaEdit className="mr-1" /> Editar
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSaveClick(service.id)}
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
                  
                  {editingItem === service.id && editedField === 'title' ? (
                    <input
                      type="text"
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
                    />
                  ) : (
                    <div className="bg-gray-50 p-3 rounded-md">
                      {service.title}
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-[#394240]">Descrição Curta</h4>
                    {editingItem !== service.id || editedField !== 'description' ? (
                      <button
                        onClick={() => handleEditClick(service.id, 'description', service.description)}
                        className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                      >
                        <FaEdit className="mr-1" /> Editar
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSaveClick(service.id)}
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
                  
                  {editingItem === service.id && editedField === 'description' ? (
                    <textarea
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857] min-h-[100px]"
                    />
                  ) : (
                    <div className="bg-gray-50 p-3 rounded-md">
                      {service.description}
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-[#394240]">Descrição Completa</h4>
                    {editingItem !== service.id || editedField !== 'longDescription' ? (
                      <button
                        onClick={() => handleEditClick(service.id, 'longDescription', service.longDescription)}
                        className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                      >
                        <FaEdit className="mr-1" /> Editar
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSaveClick(service.id)}
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
                  
                  {editingItem === service.id && editedField === 'longDescription' ? (
                    <textarea
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857] min-h-[200px]"
                    />
                  ) : (
                    <div className="bg-gray-50 p-3 rounded-md whitespace-pre-wrap">
                      {service.longDescription}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
