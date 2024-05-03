// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import LandingPage from '../src/components/LandingPage';

const title = "TIYSE"
const description = "TIYSE supports you in crafting your own search engines or contributing to open source web search.";
const url = "https://tiyse.org";
const image = "https://tiyse.org/header.png";

const HomePage = () => {
  return (
      <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/tiyse.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* <!-- HTML Meta Tags --> */}
        <meta name="description" content={description} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {typeof window !== 'undefined' && !window.location.href.includes('localhost') ? (
        <Script defer data-domain="tiyse.org" src="https://plausible.io/js/script.js" />
      ) : null}
      <LandingPage />
    </>
    
  );
};

export default HomePage;