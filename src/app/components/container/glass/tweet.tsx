import React from "react";
import  Profile from "../../tweet/glass/profile";
import Content from "../../tweet/glass/content";
import Time from "../../tweet/glass/time";
import { AppContext } from "../../../context/AppContext";
import { useContext } from "react";
import  Responses  from "../../tweet/glass/responses";

const Tweet = () => {
  const { response, cardColor } = useContext(AppContext);

  return (
    <div
      className={`
    ${
      cardColor === "Dark"
        ? "glass_morphic_card__dark"
        : "glass_morphic_card__light"
    }
    shadow-xl h-fit
    p-10`}
    >
      <Profile />
      <Content />
      <div className="w-full flex mt-5 justify-between">
        {response && <Responses />}
        <Time />
      </div>
    </div>
  );
};

export default Tweet;