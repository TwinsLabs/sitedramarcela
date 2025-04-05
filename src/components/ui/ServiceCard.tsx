import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="card bg-white hover:bg-[#E5DDD4] transition-colors duration-300">
      <div className="mb-4">
        <Image 
          src={icon} 
          alt={title} 
          width={64} 
          height={64} 
          className="h-16 w-16 object-contain"
        />
      </div>
      <h3 className="text-xl font-serif text-[#394240] mb-3">{title}</h3>
      <p className="text-[#5C6857] mb-4">{description}</p>
      <Link href={link} className="text-[#A5776C] font-medium hover:text-[#5C6857] transition-colors inline-flex items-center">
        Saiba mais
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
