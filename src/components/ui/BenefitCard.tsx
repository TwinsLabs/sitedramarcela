import React from 'react';
import Link from 'next/link';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="text-[#A5776C] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-[#394240] mb-3">{title}</h3>
      <p className="text-[#5C6857]">{description}</p>
    </div>
  );
};

export default BenefitCard;
