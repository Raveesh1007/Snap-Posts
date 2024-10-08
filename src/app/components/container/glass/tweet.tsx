import React from "react";
import { Profile, Content, Time, Response } from "../index";
import { AppContext } from "../../../../app/page";
import { useContext } from "react";

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
        {response && <Response />}
        <Time />
      </div>
    </div>
  );
};

export default Tweet;
