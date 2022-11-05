import { useTranslation } from 'next-i18next';
import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient"
    >
      <h1 className="text-xl md:text-3xl lg:text-4xl">
        <Typed
          strings={[
            `${t('hero.title1')}`,
            `${t('hero.title1')}<br />${t('hero.title2')}`,
          ]}
          typeSpeed={70}
        />
      </h1>
      <a href="#about-me" className="absolute bottom-10 animate-bounce">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.375 6.5625L15 15.9375L5.625 6.5625M24.375 14.0625L15 23.4375L5.625 14.0625"
            stroke="#F5F5F4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default Hero;
