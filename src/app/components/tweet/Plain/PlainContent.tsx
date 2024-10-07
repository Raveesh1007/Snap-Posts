import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../pages";
import Image from "next/image";

function extractTweetText(tweet: string): string{
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const withoutUrl = tweet.replace(urlRegex, "");
    const trimmedText = withoutUrl.trim();
    return trimmedText;
}

const PlainContent = () => {

    const {fontSize, tweet, textColor} = useContext(AppContext);

    const photos = tweet?.photos;
    const videoUrl = tweet?.video?.poster
    const tweetText = extractTweetText(
        tweet?.text ||
        `Start creating beautiful Images for
        your Tweets by pasting the url in the above Input Link`
    );

    const tweetLines = tweetText.split("\n");
    
    return (
        <div className="mt-4">
          {tweetLines.map((line, index) => (
            <p
              key={index}
              className={`${fontSize} mx-2 mb-2 opacity-80 text-lg ${textColor}`}
            >
              {line}
            </p>
          ))}
          <div className = "relative flex transform-gpu snap-x snap-mandatory space-x-4 overflow-x-auto">
            <div className = "shrink-0 snap-center sm:w-2" />
            {photos?.map((photo) =>(
                <Image 
                key = {photo.url}
                src = {photo.url}
                title = {photo.url}
                alt = {photo.url}
                width = {photo.width}
                height={photo.height}
                className="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl  object-cover shadow-sm"
          />
            ))}
            <div className = "shrink-0 snap-center sm:w-2" />
            </div>
          </div>
    );
};

export default PlainContent;