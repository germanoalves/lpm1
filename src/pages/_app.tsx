import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app';
import Router from 'next/router';
import React, {useEffect } from 'react';
import { GTMPageView } from '../utils/gtm';

function MyApp({ Component, pageProps }: AppProps) {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
        Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
