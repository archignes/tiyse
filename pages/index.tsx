// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Toolbar from "../src/components/toolbar/Toolbar";
import SystemList from "../src/components/SystemList";
import SearchBar from "../src/components/SearchBar";


const title = "Searchjunct"
const description = "Searchjunct helps you explore possibility in search by routing your query across multiple search engines.";
const url = "https://searchjunct.com";
const image = "https://searchjunct.com/screenshots/home.png";

const HomePage = () => {
  return (
      <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/searchjunct.svg" />
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
        <Script defer data-domain="searchjunct.com" src="https://plausible.io/js/script.js" />
      ) : null}

      <Header />
      <div className="mx-1 w-9/10 sm:w-3/4 sm:mx-auto md:w-3/7 lg:w-3/5 xl:w-2/4">
        <SearchBar />
        <Toolbar />
        <SystemList />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;