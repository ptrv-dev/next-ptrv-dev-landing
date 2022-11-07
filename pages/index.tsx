import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/IndexPage/Hero';
import AboutMe from '../components/IndexPage/AboutMe';
import RecentProjects from '../components/IndexPage/RecentProjects';
import ContactMe from '../components/IndexPage/ContactMe';

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Head>
          <title>Kirill Petrov | Web Developer | ptrv-dev</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/img/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/img/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/img/favicon/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/static/img/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
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
