import React from 'react';
import PanelDocumentCard from '../ui/PanelDocumentCard';

interface PanelDocumentsProps {
  title: string;
  subtitle?: string;
  documents: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const PanelDocuments = ({ title, subtitle, documents }: PanelDocumentsProps) => {
  return (
    <section className="section-padding bg-[#E5DDD4] bg-opacity-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#394240] mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-[#5C6857] max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((document, index) => (
            <PanelDocumentCard
              key={index}
              title={document.title}
              description={document.description}
              icon={document.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanelDocuments;
