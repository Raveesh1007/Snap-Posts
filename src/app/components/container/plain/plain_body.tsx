import { AppContext } from "@/pages";
import { useContext } from "react";
import {PlainTweet} from "@/components/container/plain/plain_tweet";

function getMaxFactor():number{
    if(typeof window !== "undefined" && window.innerWidth <= 767){
        return 400;
    }else{
        return 650;
    }
}


const PlainBody = () =>{
    const {bgColor, bgType, width, height} = useContext(AppContext);
    const scaleBy = width > height ? height : width;
    const MaxFactor = getMaxFactor(); 
    const scaleFactor = Math.min(1, MaxFactor/scaleBy);
    const scaledWidth = Math.round(width * scaleFactor);
    const scaledHeight = Math.round(height * scaleFactor);
    const color = bgColor.replace("bg-[","").replace("]","" );

    return (
        <div className={`relative 
            rounded-2xl  m-2 grid place-content-center
             p-12 bg-white  shadow-2xl min-h-fit`}
            style={{
                width: `${scaledWidth}px`,
                height: `${scaledHeight}px`,
                backgroundColor: `${color}`,
            }}
            >
      <PlainTweet />
    </div>
  );
};

export default PlainBody;
