import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar, SideBar, Body, PlainBody } from "@/containers";
import { TwitterLink, SiteLogo } from "@/components";
import { createContext, useState, useEffect } from "react";
import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { type Tweet as TweetData } from "react-tweet/api";
import TextColor from "../components/SideBarIcons/PlainBg/text_colors";

interface size {
    width : number;
    height : number;
}

export const AppContext = createContext({
    bgType: "",
    SetBgtype: (bgType: string) => {},
    response : false,
    setResponse: (response : boolean) => {},
    bgColor: "",
    SetBgColor : (bgColor: string) =>{},
    fontSize : "",
    SetFontSize : (fontSize: string) => {},
    cardColor : "",
    setCardColor : (cardColor: string) => {},
    onButtonClick : () => {},
    tweetId : "",
    setTweetId: (tweetId: string) => {},
    tweet: null as TweetData | null,
    height : 0,
    setHeight : (height: number) =>{},
    width: 0,
    setWidth:(width: number) =>{},
    textColor: "",
    setTextColor:(TextColor: string) =>{},
    favicon:"",
    setFavicon:(favicon: string) => {},
});

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    const [bgType, setBgtype] = useState("Plain");
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
    const tweetNameRef = useRef<string | null>(null);

    useEffect (() => {
        const fetchTweet = async() => {
            if(!tweetId) return;
            const res = await fetch(`/api/tweet?Id=${tweetId}`);
            if(res.ok){
                const data = await res.json() as TweetData;
                tweetNameRef.current = `${data.user.name} tweet ${tweetId}.png`;
                setTweet(data);
                console.log(data);
            }
        };

        fetchData
    }) 
}