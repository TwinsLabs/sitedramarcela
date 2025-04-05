import React from 'react';

interface ContactFormProps {
  onSubmit: (formData: any) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
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

      <div className="mb-4">
        <label htmlFor="phone" className="block text-[#394240] font-medium mb-2">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-[#394240] font-medium mb-2">
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="Assunto da mensagem"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-[#394240] font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
          placeholder="Digite sua mensagem aqui..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Enviar Mensagem
      </button>
    </form>
  );
};

export default ContactForm;
