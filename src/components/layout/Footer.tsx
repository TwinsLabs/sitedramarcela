'use client';

import React from 'react';
import { useContent } from '@/lib/contentContext';
import Link from 'next/link';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  const { contactInfo, isLoading } = useContent();

  if (isLoading) {
    return (
      <footer className="bg-[#394240] text-white py-12">
        Carregando...
      </footer>
    );
  }

  return (
    <footer className="bg-[#394240] text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">
              Dra. Marcella Vieira
            </h3>
            <p className="mb-2">Médica do Trabalho</p>
            <p className="mb-2">CRM 80479 • RQE: 61114</p>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C6B4A9] transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-[#C6B4A9] transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-[#C6B4A9] transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/painel"
                  className="hover:text-[#C6B4A9] transition-colors"
                >
                  Painel
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-[#C6B4A9] transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 text-[#C6B4A9]" />
                <span>{contactInfo.whatsapp}</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#C6B4A9]" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-3 text-[#C6B4A9]" />
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6B4A9] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-3 text-[#C6B4A9]" />
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6B4A9] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dra. Marcella Vieira.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
