import React from 'react';

interface SectionTitleProps {
  children: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <div
      className={`relative flex justify-center items-center${
        className ? ' ' + className : ''
      }`}
    >
      <span
        className="h-0.5 flex-1 md:w-16 bg-stone-50"
        style={{ maxWidth: 64 }}
      ></span>
      <h2 className="text-2xl md:text-4xl lg:text-5xl uppercase mx-2 relative z-10 text-center">
        {children}
      </h2>
      <span
        className="h-0.5 flex-1 bg-stone-50"
        style={{ maxWidth: 64 }}
      ></span>
      <h2 className="absolute text-4xl md:text-6xl lg:text-8xl uppercase top-1/2 opacity-5 -translate-y-1/2 text-center">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
