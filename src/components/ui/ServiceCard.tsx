import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link,
}: ServiceCardProps) => {
  return (
    <div
      className="card bg-white rounded-lg shadow-md p-6 transition-all duration-300
                    hover:shadow-xl hover:translate-y-[-5px] hover:bg-[#F7F5F2] border border-transparent hover:border-[#E5DDD4]"
    >
      <div className="mb-5 transform transition-transform duration-300 hover:scale-110 w-16 h-16 rounded-full bg-[#F8F6F4] flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </div>
      <h3 className="text-2xl font-serif text-[#394240] mb-3">
        {title}
      </h3>
      <p className="text-[#5C6857] mb-5">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center font-medium text-[#5C6857] hover:text-[#A5776C] transition-all
                   hover:pl-1 group border-b border-transparent hover:border-[#A5776C] pb-1"
      >
        <span>Saiba mais</span>
        <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
