"use client";

import Head from "next/head";
import { Inter } from "@next/font/google";
import { Navbar, SideBar, Body, PlainBody } from "../app/components/container";
import { TwitterLink, SiteLogo } from "../app/components/tweet";
import { createContext, useState, useEffect } from "react";
import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";

import { getTweet, type Tweet as TweetData } from "react-tweet/api";

interface Size {
  width: number;
  height: number;
}

export const AppContext = createContext({
  bgType: "",
  setBgType: (bgType: string) => {},
  response: false,
  setResponse: (response: boolean) => {},
  bgColor: "",
  setBgColor: (bgColor: string) => {},
  fontSize: "",
  setFontSize: (fontSize: string) => {},
  cardColor: "",
  setCardColor: (cardColor: string) => {},
  onButtonClick: () => {},
  tweetId: "",
  setTweetId: (tweetId: string) => {},
  tweet: null as TweetData | null,
  height: 0,
  setHeight: (height: number) => {},
  width: 0,
  setWidth: (width: number) => {},
  textColor: "",
  setTextColor: (textColor: string) => {},
  favicon: "",
  setFavicon: (favicon: string) => {},
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [bgType, setBgType] = useState("Plain");
  const [response, setResponse] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [fontSize, setFontSize] = useState("text-lg");
  const [cardColor, setCardColor] = useState("Dark");
  const [tweet, setTweet] = useState<TweetData | null>(null);
  const [tweetId, setTweetId] = useState("");
  const [height, setHeight] = useState(1080);
  const [width, setWidth] = useState(1080);
  const [textColor, setTextColor] = useState("text-black");
  const [favicon, setFavicon] = useState("/favicon_light.ico");
  const tweetNameRef = useRef<string |null>(null);

  useEffect(() =>{
    const fetchTweet = async() =>{
      if(!tweetId) return;

      try{
        const res = await fetch('/api/tweet?id = ${tweetId');
        if(res.ok){
          const data = await res.json();
          setTweet(data);
          console.log('Fetched tweet data', data);
        }else{
          console.error('Failed to fetch tweet data', res.statusText);
        }
      }catch(error){
        console.error('Failed to fetch tweet data', error);
      }
    };

    fetchTweet();
  }, [tweetId]);

  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setFavicon(prefersDark ? "/favicon_dark.ico" : "/favicon_light.ico");
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (
      ref.current === null ||
      ref.current.firstChild === null ||
      !(ref.current.firstChild instanceof HTMLElement)
    ) {
      return;
    }

    toPng(ref.current.firstChild, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = tweetNameRef.current || "tweet.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <AppContext.Provider
      value={{
        bgType,
        setBgType,
        response,
        setResponse,
        bgColor,
        setBgColor,
        fontSize,
        setFontSize,
        cardColor,
        setCardColor,
        tweetId,
        setTweetId,
        tweet,
        onButtonClick,
        height,
        setHeight,
        width,
        setWidth,
        textColor,
        setTextColor,
        favicon,
        setFavicon,
      }}
    >
      <Head>
        <title>Snap-Posts</title>
        <meta
          name="description"
          content="Convert Your tweets into beautiful images"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="3000x3000" href={favicon} />
      </Head>
      <section className="relative h-screen  max-sm:hidden">
        <Navbar />
        <SideBar />
        <div
          className="py-4 min-h-[80vh] max-h-[90vh] w-full flex justify-center overflow-auto"
          ref={ref}
        >
          {bgType === "Glass" ? <Body /> : <PlainBody />}
        </div>

        <TwitterLink />
        <SiteLogo />
      </section>
      <section className="sm:hidden">
        <div className="text-center h-[100vh] items-center align-middle">
          <h1>
            Made with ❤️ by{" "}
            <a href="https://x.com/0xRaveesh">Raveesh Kumar</a>
          </h1>
          <h1 className="absolute top-1/2 text-4xl align-middle">
            The Site Only Works on Bigger Screens
          </h1>
        </div>
      </section>
    </AppContext.Provider>
  );
}
