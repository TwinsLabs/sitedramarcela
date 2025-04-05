import React from 'react';

interface QuoteRequestFormProps {
  onSubmit: (formData: any) => void;
}

const QuoteRequestForm = ({ onSubmit }: QuoteRequestFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-serif text-[#394240] mb-6">Solicitar Orçamento</h3>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-[#394240] font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="Seu nome completo"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block text-[#394240] font-medium mb-2">
          Nome da empresa
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="Nome da sua empresa"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-[#394240] font-medium mb-2">
          Cidade
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="Sua cidade"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-[#394240] font-medium mb-2">
          Contato telefônico
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="whatsapp" className="block text-[#394240] font-medium mb-2">
          Contato WhatsApp
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-[#394240] font-medium mb-2">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="seu.email@exemplo.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-[#394240] font-medium mb-2">
          Descrição resumida do trabalho
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="Descreva brevemente o serviço que você precisa..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Enviar Solicitação
      </button>
    </form>
  );
};

export default QuoteRequestForm;
