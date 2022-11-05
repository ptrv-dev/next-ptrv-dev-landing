import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

import AboutMe from '../components/IndexPage/AboutMe';
import ContactMe from '../components/IndexPage/ContactMe';
import Hero from '../components/IndexPage/Hero';
import RecentProjects from '../components/IndexPage/RecentProjects';

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default IndexPage;

// @ts-ignore-next-line
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
