import React from 'react';

interface PanelDocumentCardProps {
  title: string;
  description: string;
  icon: string;
}

const PanelDocumentCard = ({ title, description, icon }: PanelDocumentCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#A5776C]">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <img src={icon} alt={title} className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-lg font-serif text-[#394240] mb-2">{title}</h3>
          <p className="text-sm text-[#5C6857]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PanelDocumentCard;
