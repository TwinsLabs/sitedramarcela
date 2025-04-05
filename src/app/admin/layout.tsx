'use client';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaHome, FaUser, FaBriefcase, FaBook, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirecionar para a página de login se não estiver autenticado
  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E5DDD4] bg-opacity-30">
        <div className="text-[#394240] text-xl">Carregando...</div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null; // Será redirecionado pelo useEffect
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#E5DDD4] bg-opacity-30 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#394240] text-white min-h-screen flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <div className="bg-white p-2 rounded flex justify-center mb-2">
            <Image 
              src="/images/logo.png" 
              alt="Dra. Marcella Vieira" 
              width={150} 
              height={60} 
              className="h-auto"
            />
          </div>
          <div className="text-center">
            <p className="text-sm opacity-75">Painel Administrativo</p>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a 
                href="/admin/dashboard" 
                className="flex items-center p-2 rounded hover:bg-[#5C6857] transition-colors"
              >
                <FaHome className="mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a 
                href="/admin/paginas" 
                className="flex items-center p-2 rounded hover:bg-[#5C6857] transition-colors"
              >
                <FaBook className="mr-3" />
                Páginas
              </a>
            </li>
            <li>
              <a 
                href="/admin/servicos" 
                className="flex items-center p-2 rounded hover:bg-[#5C6857] transition-colors"
              >
                <FaBriefcase className="mr-3" />
                Serviços
              </a>
            </li>
            <li>
              <a 
                href="/admin/painel" 
                className="flex items-center p-2 rounded hover:bg-[#5C6857] transition-colors"
              >
                <FaBook className="mr-3" />
                Painel
              </a>
            </li>
            <li>
              <a 
                href="/admin/imagens" 
                className="flex items-center p-2 rounded hover:bg-[#5C6857] transition-colors"
              >
                <FaEnvelope className="mr-3" />
                Imagens
              </a>
            </li>
            <li>
              <a 
                href="/admin/configuracoes" 
                className="flex items-center p-2 rounded hover:bg-[#5C6857] transition-colors"
              >
                <FaCog className="mr-3" />
                Configurações
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-[#A5776C] rounded-full flex items-center justify-center mr-3">
              <FaUser className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium">{session?.user?.name}</p>
              <p className="text-xs opacity-75">{session?.user?.email}</p>
            </div>
          </div>
          <button 
            onClick={handleSignOut}
            className="flex items-center p-2 rounded hover:bg-[#5C6857] transition-colors w-full"
          >
            <FaSignOutAlt className="mr-3" />
            Sair
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-serif text-[#394240]">Painel Administrativo</h1>
          </div>
        </header>
        
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
