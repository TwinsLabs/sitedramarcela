import React, { useState, useRef } from 'react';
import {
  FaPaperPlane,
  FaArrowRight,
  FaSpinner,
} from 'react-icons/fa';

interface ContactFormProps {
  onSubmit: (formData: any) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({
    text: '',
    isError: false,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Mostrar feedback visual de carregamento
    setSubmitting(true);
    setMessage({ text: '', isError: false });

    try {
      // Tentar primeiro com Gmail, se falhar usa Resend
      const response = await fetch('/api/send-email-gmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || 'Ocorreu um erro ao enviar a mensagem'
        );
      }

      // Mensagem de sucesso
      setMessage({
        text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        isError: false,
      });

      // Limpar o formulário de forma segura
      if (formRef.current) {
        formRef.current.reset();
      } else {
        // Backup para limpar campos individualmente se o ref não estiver disponível
        const inputs = document.querySelectorAll<
          HTMLInputElement | HTMLTextAreaElement
        >('input, textarea');
        inputs.forEach((input) => {
          if (input.name) input.value = '';
        });
      }

      // Também chamamos o callback onSubmit para manter compatibilidade
      onSubmit(data);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setMessage({
        text:
          error instanceof Error
            ? error.message
            : 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.',
        isError: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Classe comum para todos os inputs para garantir consistência
  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A5776C] focus:border-[#A5776C] transition-all duration-300 box-border';

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg border border-[#E5DDD4] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#A5776C] to-[#5C6857]"></div>

      <div className="mb-6 bg-[#F8F6F4] p-4 rounded-md border-l-4 border-[#A5776C]">
        <p className="text-[#5C6857] text-sm font-secondary">
          <strong>Dica:</strong> Preencha todos os campos corretamente
          para que possamos entender melhor sua necessidade e retornar
          o mais breve possível.
        </p>
      </div>

      {message.text && (
        <div
          className={`mb-6 p-4 rounded-md ${message.isError ? 'bg-red-100 text-red-700 border border-red-400' : 'bg-green-100 text-green-700 border border-green-400'}`}
        >
          {message.text}
        </div>
      )}

      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-[#394240] font-medium mb-2 flex items-center"
        >
          Nome <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClass}
          placeholder="Seu nome completo"
          disabled={submitting}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-[#394240] font-medium mb-2 flex items-center"
        >
          E-mail <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClass}
          placeholder="seu.email@exemplo.com"
          disabled={submitting}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block text-[#394240] font-medium mb-2"
        >
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={inputClass}
          placeholder="(00) 00000-0000"
          disabled={submitting}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="subject"
          className="block text-[#394240] font-medium mb-2 flex items-center"
        >
          Assunto <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={inputClass}
          placeholder="Assunto da mensagem"
          disabled={submitting}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-[#394240] font-medium mb-2 flex items-center"
        >
          Mensagem <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={`${inputClass} resize-y min-h-[120px] max-w-full`}
          placeholder="Descreva detalhadamente como posso ajudar você..."
          style={{ width: '100%' }}
          disabled={submitting}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#A5776C] text-white py-3 px-6 rounded-md font-medium hover:bg-[#8A6054] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center group disabled:opacity-70 disabled:hover:transform-none disabled:hover:shadow-none"
      >
        {submitting ? (
          <>
            <FaSpinner className="animate-spin mr-2" />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <span>Enviar Mensagem</span>
            <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </>
        )}
      </button>

      <p className="text-xs text-[#5C6857] mt-4 text-center">
        Seus dados estão seguros e não serão compartilhados com
        terceiros.
      </p>
    </form>
  );
};

export default ContactForm;
