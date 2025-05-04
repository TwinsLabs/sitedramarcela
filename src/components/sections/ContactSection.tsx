import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaQuoteRight,
  FaStar,
  FaUniversity,
  FaBuilding,
} from 'react-icons/fa';
import ContactForm from '../ui/ContactForm';

interface ContactSectionProps {
  title: string;
  subtitle?: string;
  onSubmit: (formData: any) => void;
}

const ContactSection = ({
  title,
  subtitle,
  onSubmit,
}: ContactSectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#F8F6F4]">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5DDD4] opacity-20 rounded-full transform translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A5776C] opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#394240] mb-4 relative inline-block">
            {title}
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#A5776C] transform translate-y-1"></span>
          </h2>
          {subtitle && (
            <p className="text-xl text-[#5C6857] max-w-2xl mx-auto font-secondary">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-[#E5DDD4] h-fit">
            <h3 className="text-2xl font-serif text-[#394240] mb-6 relative pb-3">
              Informações de Contato
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#A5776C]"></span>
            </h3>

            <div className="space-y-8">
              <div className="flex items-start transform transition-transform hover:translate-x-2 duration-300">
                <div className="bg-[#F8F6F4] p-3 rounded-full text-[#A5776C] mr-4">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#394240] mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/5534984015538"
                    className="text-[#5C6857] hover:text-[#A5776C] transition-colors"
                  >
                    (34) 98401-5538
                  </a>
                </div>
              </div>

              <div className="flex items-start transform transition-transform hover:translate-x-2 duration-300">
                <div className="bg-[#F8F6F4] p-3 rounded-full text-[#A5776C] mr-4">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#394240] mb-1">
                    E-mail
                  </h4>
                  <a
                    href="mailto:dramarcellaribeirovieira@gmail.com"
                    className="text-[#5C6857] hover:text-[#A5776C] transition-colors"
                  >
                    dramarcellaribeirovieira@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E5DDD4]">
              <h4 className="text-lg font-medium text-[#394240] mb-4">
                Siga nas redes sociais
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/marcellarivieira"
                  className="bg-[#F8F6F4] p-3 rounded-full text-[#A5776C] hover:bg-[#A5776C] hover:text-white transition-all duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="http://linkedin.com/in/marcella-r-31373a235"
                  className="bg-[#F8F6F4] p-3 rounded-full text-[#A5776C] hover:bg-[#A5776C] hover:text-white transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Depoimento */}
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
