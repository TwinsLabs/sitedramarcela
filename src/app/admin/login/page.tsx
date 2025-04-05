'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError('Credenciais inválidas. Por favor, tente novamente.');
        setLoading(false);
        return;
      }

      router.push('/admin/dashboard');
    } catch (error) {
      setError('Ocorreu um erro ao fazer login. Por favor, tente novamente.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD4] bg-opacity-30 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image 
            src="/images/logo.png" 
            alt="Dra. Marcella Vieira" 
            width={200} 
            height={80} 
            className="h-auto"
          />
        </div>
        
        <h1 className="text-2xl font-serif text-center text-[#394240] mb-6">
          Painel Administrativo
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#394240] font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
              placeholder="admin@dramarcellavieira.com.br"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-[#394240] font-medium mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5C6857] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Credenciais padrão: admin@dramarcellavieira.com.br / admin123
          </p>
        </div>
      </div>
    </div>
  );
}
