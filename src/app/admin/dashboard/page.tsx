'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { FaTachometerAlt, FaEdit, FaImage, FaList, FaEnvelope } from 'react-icons/fa';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-3xl font-serif text-[#394240] mb-6">Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-serif text-[#394240] mb-4">Bem-vindo(a), {session?.user?.name}!</h2>
        <p className="text-[#5C6857] mb-4">
          Este é o painel administrativo do site da Dra. Marcella Vieira. Aqui você pode gerenciar o conteúdo do site, 
          incluindo textos, imagens e informações de contato.
        </p>
        <p className="text-[#5C6857]">
          Utilize o menu lateral para navegar entre as diferentes seções do painel administrativo.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#5C6857] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <FaEdit className="text-[#5C6857] text-xl" />
            </div>
            <h3 className="text-lg font-serif text-[#394240]">Páginas</h3>
          </div>
          <p className="text-[#5C6857] mb-4">Edite o conteúdo das páginas principais do site.</p>
          <a 
            href="/admin/paginas" 
            className="text-[#A5776C] font-medium hover:text-[#5C6857] transition-colors inline-flex items-center"
          >
            Gerenciar Páginas
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#5C6857] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <FaList className="text-[#5C6857] text-xl" />
            </div>
            <h3 className="text-lg font-serif text-[#394240]">Serviços</h3>
          </div>
          <p className="text-[#5C6857] mb-4">Gerencie os serviços oferecidos e suas descrições.</p>
          <a 
            href="/admin/servicos" 
            className="text-[#A5776C] font-medium hover:text-[#5C6857] transition-colors inline-flex items-center"
          >
            Gerenciar Serviços
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#5C6857] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <FaImage className="text-[#5C6857] text-xl" />
            </div>
            <h3 className="text-lg font-serif text-[#394240]">Imagens</h3>
          </div>
          <p className="text-[#5C6857] mb-4">Faça upload e gerencie as imagens utilizadas no site.</p>
          <a 
            href="/admin/imagens" 
            className="text-[#A5776C] font-medium hover:text-[#5C6857] transition-colors inline-flex items-center"
          >
            Gerenciar Imagens
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-serif text-[#394240] mb-4">Acesso Rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="/" 
            target="_blank" 
            className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-[#E5DDD4] hover:bg-opacity-30 transition-colors"
          >
            <FaTachometerAlt className="text-[#5C6857] mr-3" />
            Visualizar Site
          </a>
          <a 
            href="/admin/configuracoes" 
            className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-[#E5DDD4] hover:bg-opacity-30 transition-colors"
          >
            <FaEnvelope className="text-[#5C6857] mr-3" />
            Configurações de Contato
          </a>
        </div>
      </div>
    </div>
  );
}
