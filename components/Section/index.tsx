import React from 'react';

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={`py-5${className ? ' ' + className : ''}`}>
      {children}
    </section>
  );
};

export default Section;
