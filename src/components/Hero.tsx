
import React from 'react';

interface HeroProps {
  title: string;
  imageSrc: string;
  description?: string;
}

const Hero = ({ title, imageSrc, description }: HeroProps) => {
  return (
    <div className="relative h-[50vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{title}</h2>
        {description && <p className="text-xl text-center max-w-2xl">{description}</p>}
      </div>
    </div>
  );
};

export default Hero;
