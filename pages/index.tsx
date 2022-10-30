import Head from 'next/head';
import React from 'react';

import AboutMe from '../components/IndexPage/AboutMe';
import ContactMe from '../components/IndexPage/ContactMe';
import Hero from '../components/IndexPage/Hero';
import RecentProjects from '../components/IndexPage/RecentProjects';

const IndexPage = () => {
  return (
    <main id="main">
      <Head>
        <title>Kirill Petrov | Web Developer | ptrv-dev</title>
      </Head>
      <div className="container">
        <Hero />
        <AboutMe />
        <RecentProjects />
        <ContactMe />
      </div>
    </main>
  );
};

export default IndexPage;
