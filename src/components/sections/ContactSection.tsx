import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../ui/ContactForm';

interface ContactSectionProps {
  title: string;
  subtitle?: string;
  onSubmit: (formData: any) => void;
}

const ContactSection = ({ title, subtitle, onSubmit }: ContactSectionProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#394240] mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-[#5C6857] max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-[#394240] mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-[#A5776C] mr-4">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#394240] mb-1">Telefone</h4>
                  <p className="text-[#5C6857]">(XX) XXXXX-XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#A5776C] mr-4">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#394240] mb-1">WhatsApp</h4>
                  <p className="text-[#5C6857]">(XX) XXXXX-XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#A5776C] mr-4">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#394240] mb-1">E-mail</h4>
                  <p className="text-[#5C6857]">contato@dramarcellavieira.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#A5776C] mr-4">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#394240] mb-1">Localização</h4>
                  <p className="text-[#5C6857]">Atendimento em todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
