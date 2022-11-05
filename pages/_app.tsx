import type { AppProps } from 'next/app';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.scss';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
