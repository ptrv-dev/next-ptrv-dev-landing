import React from 'react';
import AboutMe from '../components/IndexPage/AboutMe';
import Hero from '../components/IndexPage/Hero';

const IndexPage = () => {
  return (
    <main id="main">
      <div className="container">
        <Hero />
        <AboutMe />
      </div>
    </main>
  );
};

export default IndexPage;
