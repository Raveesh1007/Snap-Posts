import React from "react";
import {useContext} from "react";
import {AppContext} from "@/pages";
import {BsSunFill, BsMoonFill} from "react-icons/bs";

function getTheme(isDarkMode: boolean):string{
    if(isDarkMode){
        console.log("Dark Mode");
        return "dark";
    }else{
        console.log("Light Mode");
        return "light";
    }
}

const CardColor = () => {
    const {SetCardColor} = useContext(AppContext);

    return (
        <div className='sidebar_icon'>
          <div className='flex flex-col items-center justify-center w-full h-full'>
    
            <label className="swap swap-rotate ">
              <input type="checkbox"
              onChange={(e) => {
                setCardColor(getTheme(e.target.checked))
              }}
              />
              <BsSunFill className="swap-on fill-current w-6 h-6 text-slate-500" />
              <BsMoonFill className="swap-off fill-current w-6 h-6 text-slate-500" />
            </label>
            <p className='icon_text'>
              Card
            </p>
    
          </div>
        </div>
      );
    }
    
export default CardColor;