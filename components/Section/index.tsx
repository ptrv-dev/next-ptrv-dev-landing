import React from 'react';

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`py-5${className ? ' ' + className : ''}`}>
      {children}
    </section>
  );
};

export default Section;
