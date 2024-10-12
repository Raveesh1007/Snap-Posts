'use client';

import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Navbar, SideBar, Body, PlainBody } from '../app/components/container';
import { TwitterLink, SiteLogo } from '../app/components/tweet';
import { useState, useEffect, useCallback, useRef } from 'react';
import React from 'react';
import { toPng } from 'html-to-image';
import { fetchTweetById } from '../app/tweet/action'; 
import { Tweet as TweetData } from 'react-tweet/api';
import { AppContext } from './context/AppContext'; // Importing from the context file

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [bgType, setBgType] = useState<string>('Plain');
  const [response, setResponse] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>('white');
  const [fontSize, setFontSize] = useState<string>('text-lg');
  const [cardColor, setCardColor] = useState<string>('Dark');
  const [tweet, setTweet] = useState<TweetData | null>(null);
  const [tweetId, setTweetId] = useState<string>('');
  const [height, setHeight] = useState<number>(1080);
  const [width, setWidth] = useState<number>(1080);
  const [textColor, setTextColor] = useState<string>('text-black');
  const [favicon, setFavicon] = useState<string>('/favicon_light.ico');
  const tweetNameRef = useRef<string | null>(null);

  useEffect(() => {
    const fetchTweet = async () => {
      if (!tweetId) return;

      try {
        const fetchedTweet = await fetchTweetById(tweetId);
        if (fetchedTweet) {
          tweetNameRef.current = `${fetchedTweet.user.name} tweet ${tweetId}.png`;
          setTweet(fetchedTweet);
        } else {
          console.error('Tweet not found');
        }
      } catch (error) {
        console.error('Error fetching tweet:', error);
      }
    };

    fetchTweet();
  }, [tweetId]);

  useEffect(() => {
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setFavicon(prefersDark ? '/favicon_dark.ico' : '/favicon_light.ico');
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (!ref.current || !(ref.current.firstChild instanceof HTMLElement)) return;

    toPng(ref.current.firstChild as HTMLElement, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = tweetNameRef.current || 'tweet.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error('Error creating image:', err));
  }, [ref, tweetNameRef.current]);

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
        setTweet,
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
        <meta name="description" content="Convert Your tweets into beautiful images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="3000x3000" href={favicon} />
      </Head>
      <section className="relative h-screen max-sm:hidden">
        <Navbar />
        <SideBar />
        <div className="py-4 min-h-[80vh] max-h-[90vh] w-full flex justify-center overflow-auto" ref={ref}>
          {bgType === 'Glass' ? <Body /> : <PlainBody />}
        </div>
        <TwitterLink />
        <SiteLogo />
      </section>
      <section className="sm:hidden">
        <div className="text-center h-[100vh] items-center align-middle">
          <h1>
            Made with ❤️ by <a href="https://x.com/0xRaveesh">Raveesh Kumar</a>
          </h1>
          <h1 className="absolute top-1/2 text-4xl align-middle">
            The Site Only Works on Bigger Screens
          </h1>
        </div>
      </section>
    </AppContext.Provider>
  );
}
