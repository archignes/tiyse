import React from 'react'; 
import '../src/styles/globals.css';
import { AppProps } from 'next/app';
import { StrictMode } from 'react';
import { FeedbackAction } from '../src/components/FeedbackAction';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (    
        <StrictMode>
            <Component {...pageProps} />
            <Footer />
            <FeedbackAction />
        </StrictMode>
    );
}

export default MyApp;