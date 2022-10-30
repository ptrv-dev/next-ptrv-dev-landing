import React from 'react';
import Typed from 'react-typed';

const Hero: React.FC = () => {
  const onScrollClick = () => {};
  return (
    <div
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient"
    >
      <h1 className="text-xl md:text-3xl lg:text-4xl">
        <Typed
          strings={[
            '&gt; Hello, I&apos;m Kirill Petrov',
            '&gt; Hello, I&apos;m Kirill Petrov<br />&gt; I can make you a cool <span class="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-stone-50">website</span>.',
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
