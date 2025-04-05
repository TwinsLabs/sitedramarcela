'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 mr-3">
              <Image
                src="/images/logo.png"
                alt="Dra. Marcella Vieira"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-serif text-[#394240]">Dra. Marcella Vieira</h1>
              <p className="text-xs text-[#5C6857]">Médica do Trabalho • CRM 80479 • RQE: 61114</p>
            </div>
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-[#394240] hover:text-[#A5776C] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-[#394240] hover:text-[#A5776C] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-[#394240] hover:text-[#A5776C] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/painel" className="text-[#394240] hover:text-[#A5776C] transition-colors">
                  Painel
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-[#394240] hover:text-[#A5776C] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#394240] hover:text-[#A5776C] transition-colors"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-inner">
          <div className="container-custom">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/" 
                    className="block text-[#394240] hover:text-[#A5776C] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/sobre" 
                    className="block text-[#394240] hover:text-[#A5776C] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/servicos" 
                    className="block text-[#394240] hover:text-[#A5776C] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/painel" 
                    className="block text-[#394240] hover:text-[#A5776C] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Painel
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contato" 
                    className="block text-[#394240] hover:text-[#A5776C] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
