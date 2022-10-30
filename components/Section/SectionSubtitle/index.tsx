import React from 'react';

interface SectionSubtitleProps {
  children: string;
  className?: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`flex items-center${className ? ' ' + className : ''}`}>
      <span className="1 w-7 h-0.5 bg-stone-50"></span>
      <h4 className="mx-2 uppercase text-lg md:text-2xl">{children}</h4>
      <span className="flex-1 h-0.5 bg-stone-50"></span>
    </div>
  );
};

export default SectionSubtitle;
