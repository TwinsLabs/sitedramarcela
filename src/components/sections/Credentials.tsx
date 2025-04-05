import React from 'react';
import Image from 'next/image';

interface CredentialsProps {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const Credentials = ({ items }: CredentialsProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#394240] mb-4">Credenciais e Diferenciais</h2>
          <p className="text-lg text-[#5C6857] max-w-3xl mx-auto">
            Conheça as qualificações e diferenciais que fazem da Dra. Marcella Vieira uma referência em Medicina do Trabalho e Perícias Médicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center mb-4">
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={64} 
                  height={64} 
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-serif text-[#394240] mb-3">{item.title}</h3>
              <p className="text-[#5C6857]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
