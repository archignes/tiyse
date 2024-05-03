"use client"

import React from 'react';d
import Link from 'next/link';
import OpenSourceSystems from './OpenSourceSystems';
import { Alert, AlertDescription } from './ui/alert';

const TiyseHeaderTitle: React.FC = () => {
  return (
    <div className='flex flex-row'>
    <span className="font-bold text-gray-500">
      TI<span className="text-black">Y</span>SE
    </span>
    </div>
  )
}

const TiyseHeaderAcrostic: React.FC = () => {
    return (
    <div className='flex flex-col font-bold text-sm text-center text-gray-500'>
      <p className="h-3">This</p>
      <p className="h-3">Is</p>
      <p className='text-black h-5 text-lg'>Your</p>
      <p className="h-3">Search</p>
      <p className="h-3 mb-1">Engine</p>
    </div>
  )
}



const LandingPage: React.FC = () => {
  return (<>
    <header className="flex flex-row items-center justify-center pt-1 mb-5 mx-3">
      {/* <Image className="inline" src="/tiyse.svg" alt="TIYSE Logo" width={90} height={90} /> */}
      <Link href="/" className={`col-span-10 text-8xl text-center block`}>
        <TiyseHeaderTitle />
        <TiyseHeaderAcrostic />
      </Link>
    </header>
    <div className='mx-3 sm:w-2/5 sm:mx-auto'>

            You can build, remix, extend, or repair <span className="text-black font-bold">your</span> search engine. You can:
            <ul className='ml-10 list-disc' >
              <li>use a kit</li>
              <li>conduct repairs</li>
              <li>patch together components</li>
              <li>fork existing open source projects</li>
              <li>contribute to an open source search interface or engine</li>
            </ul>
          </div>
        <div className='w-[90%] mx-3 sm:w-3/5 sm:mx-auto'>
            <h2 className='text-2xl my-4 text-center font-bold'>
              Search Engine Kits
            </h2>
            <p className='text-gray-500 text-center mb-10'>
              Coming soon...
            </p>
            <h2 className='text-2xl my-4 text-center font-bold'>
              Search Maintenance and Repair
            </h2>
      <p className='text-gray-500 text-center mb-4'>
        Coming soon...
      </p>
    <Alert className='mx-auto max-w-[90%]'>      
      <AlertDescription>
          <p>This section will include resources for:</p>
        <ul className='ml-10 list-disc' >
        <li>reflecting on your own search practices</li>
        <li>evaluating and documenting search quality</li>
        <li>providing public comment or private feedback</li>
        <li>modifying your use of existing search systems through provided features, extensions, userscripts, and alternative practices.</li>
          </ul>
        <div className='my-1'>
          For now try:
          <ul className='ml-10 list-disc'>
            <li><a className='rounded-md hover:bg-blue-100 underline p-1' href="https://searchevals.com">Searchevals:</a> Public evaluations of search quality.</li>
            <li><a className='rounded-md hover:bg-blue-100 underline p-1' href="https://searchjunct.com">Searchjunct:</a> A search discovery and router engine.</li>
            <li><a className='rounded-md hover:bg-blue-100 underline p-1' href="https://github.com/archignes/searchpaths">Searchpaths:</a> A tool to review your search system choices.</li>
          </ul>
        </div>
      </AlertDescription>
    </Alert>

            <h2 className='text-2xl my-4 text-center font-bold'>
              Search Components
            </h2>
            <p className='text-gray-500 text-center mb-10'>
              Coming soon...
            </p>
            <h2 className='text-2xl my-4 text-center font-bold'>
              Open Source Web Search Interfaces and Engines
            </h2>
            <p className='my-2'>The systems below are identified as principally open source search <span className='font-bold'>interfaces</span> or <span className='font-bold'>engines</span>.
            The term &lsquo;interface&rsquo; identifies systems that principally open the search user interface.
            This will include the search bar, the search results, and processing both before and after pulling results from a web search index.
            The term &lsquo;engine&rsquo; refers to a search engine, inclusive of an interface and index (perhaps also of crawling to update the web index).
            Note: The &lsquo;metasearch&rsquo; category includes search interfaces that return search results from multiple search services.
            </p>
            <p className='my-2'>Open source search systems may be further decomposed and remixed, for example crawling, parsing, generation, filtering, reranking, and systems for search autocomplete and related questions.
            These will be shared above in the search kits section.</p>

            <OpenSourceSystems />
          </div>
      </>
  );
};

export default LandingPage;
