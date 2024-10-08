import React from "react";
import PlainProfile from "../../tweet/Plain/PlainProfile";
import PlainContent from "../../tweet/Plain/PlainContent";
import PlainTime from "../../tweet/Plain/Plaintime";
import PlainResponse from "../../tweet/Plain/Plain_responses";
import { AppContext } from "../../../page";
import { useContext } from "react";

const PlainTweet = () => {
  const { response, cardColor } = useContext(AppContext);

  return (
    <div className={`w-full p-2`}>
      <PlainProfile />
      <PlainContent />
      <div className="absolute bottom-8 px-5 w-[100%] ">
        <div className="flex justify-between w-full mt-5 items-center">
          {response && <PlainResponse />}
          <PlainTime />
        </div>
      </div>
    </div>
  );
};

export default PlainTweet;
