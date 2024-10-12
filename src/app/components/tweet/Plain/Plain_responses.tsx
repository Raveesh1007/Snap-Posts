import React, { useContext } from 'react';
import { AppContext } from "../../../context/AppContext";

const PlainResponse = () => {
  const { cardColor, tweet, textColor } = useContext(AppContext);

  // Fallback to default values if tweet or counts are undefined
  const favCount = tweet?.favorite_count ?? 0;
  // const retweetCount = tweet?.retweet_count ?? 0;

  return (
    <div className={`w-full flex font-bold justify-start gap-2 ${textColor}`}>
      {/* Display likes only if there's a non-zero count */}
      {favCount > 0 && (
        <>
          {favCount} <p className="opacity-70">likes</p>
        </>
      )}
      
      {/* Uncomment this if retweets should be shown */}
      {/* 
      {retweetCount > 0 && (
        <>
          {retweetCount} <p className="opacity-70">retweets</p>
        </>
      )}
      */}
    </div>
  );
};

export default PlainResponse;
