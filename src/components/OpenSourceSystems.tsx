// OpenSourceSystems.tsx

import React, { useState, useEffect, useCallback } from "react";
import { OpenSourceSystemType } from "../types/system";
import { baseSystems } from "./SystemsContext";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { SystemFavicon } from "./Favicon";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { SystemFooterLinks } from "./FooterLinks";

const AddLinksToText: React.FC<{ textLinksObject: {text: string, urls?: {label: string, url: string}[], quote: boolean, code?: boolean}}> = ({ textLinksObject }) => {
  let newText = textLinksObject.text
  if (textLinksObject.urls) {
      let replacementsMade = 0;

      textLinksObject.urls?.forEach((url) => {
        const anchorTag = `<a class="hover:bg-blue-100 underline pt-1 rounded-md" href="${url.url}">${url.label}</a>`;
        const regex = new RegExp(`\\b${url.label}\\b`, 'g'); // Use word boundary to match exact words
        if (newText.includes(url.label)) {
          newText = newText.replace(regex, anchorTag);
          replacementsMade += 1;
        } else {
          console.log(`Replacement not made for URL: ${url.url}, label: ${url.label}`);
        }
      });

      if (replacementsMade !== textLinksObject.urls?.length) {
        throw new Error("Not all replacements were made in the text.");
      }
  }
  if (textLinksObject.code) {
    return (
      <pre className={`text-xs ml-3 max-w-[99%] bg-gray-100 py-2 overflow-x-auto break-words break-all ${textLinksObject.quote ? "border-l-2 pl-3" : ""} mt-2 mb-1`}>{newText}</pre>
    );
  }

  return (
    <p className={`text-sm ml-3 ${textLinksObject.quote ? "border-l-2 pl-3" : ""} mt-2 mb-1`} dangerouslySetInnerHTML={{ __html: newText.replace(/\n/g, "<br />") }} />
  );
};

const OpenSourceSystemItem: React.FC<{ system: OpenSourceSystemType }> = ({ system }) => {
  if (!system.githubLink && !system.openSourceLicense) {
    return null;
  }


  const systemLink = system.searchLink || system.githubLink;

  return ( 
    <Card>
      <CardHeader>
      <CardTitle className="flex flex-row items-center">
        {systemLink && <SystemFavicon system={system}/>}
        {systemLink && <a href={systemLink} className="hover:bg-blue-100 underline text-xl p-1 rounded-md">{system.name}</a>}
      </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm"><span className="font-bold">Type:</span> {system.type}</p>
          <p className="text-sm"><span className="font-bold">Output:</span> {system.characteristics?.output}</p>
        {(system.supportedIndexes || system.supportedIndexesText) && <p className="text-sm"><span className="font-bold">Supported Indexes:</span> {system.supportedIndexes?.join(", ")}</p>}
          {system.supportedIndexesText && <AddLinksToText textLinksObject={system.supportedIndexesText}/>}
          {system.githubLink && (
            <a href={system.githubLink} 
               className="underline hover:bg-blue-100 p-1 pb-0 w-fit rounded-md flex items-center">
              <GitHubLogoIcon className="inline w-5 h-5 text-black" />
              <span className="ml-1">
                <span className="font-bold">GitHub:</span> {system.githubLink.replace('https://github.com/', '')}
              </span>
            </a>
          )}
          {system.openSourceLicense && (
              <span className="ml-5 my-0 text-xs">
                License: {system.openSourceLicense.replace('https://github.com/', '')}
              </span>
          )}
          {system.githubDescription && (
          <p id={`github-description-${system.id}`} className="text-sm text-center mx-10 my-2">&quot;{system.githubDescription}&quot;</p>
          )}
      </CardContent>
      <CardFooter className="flex flex-row justify-center">
        <SystemFooterLinks system={system} skip={["github"]}/>
      </CardFooter>
    </Card>
  );
};

const OpenSourceSystems: React.FC = () => {
  const systems = baseSystems as OpenSourceSystemType[];
  
  const [randomizedList, setRandomizedList] = useState([...systems]);

  const randomizeList = useCallback(() => {
    const newList = [...systems].sort(() => Math.random() - 0.5);
    setRandomizedList(newList);
  }, [systems]);

  useEffect(() => {
    randomizeList(); // Initial randomization on component mount
  }, [randomizeList]);
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  

  return (
    <div className="flex flex-col gap-2 w-full sm:w-2/3 mx-2 sm:mx-auto">
      <Button variant="outline" onClick={randomizeList}>Randomize</Button>
      {randomizedList.map((system) => (
        <OpenSourceSystemItem key={system.id} system={system} />
      ))}
    </div>
  );
};

export default OpenSourceSystems;
