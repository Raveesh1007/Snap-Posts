import React from "react";
import {useContext, useState} from "react";
import { AppContext } from "@/pages";

function getBgClass(hexCode: string):string{
    const validHexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if(validHexRegex.test(hexCode)){
        return `bg-${hexCode}`
    } else {
        console.log(`${hexCode} is not a valid hex code`);
        return undefined;
    }
}

const PlainColors =() =>{

    const{ bgColor } = useContext{AppContext}

    return(
        <div className="sidebar_icon flex-col dropdown-right dropdown-hover">
            <div tabIndex={0} className = {`text-3xl ${bgColor} shadow-md rounded-full w-8 h-8 border-2 border-grey-300 item-slate-500`}></div>
            <p className="icon-text">Color</p>
            <Menu />
        </div>
    );
}

const Menu = () => {

    const { setBgColor } = useContext(AppContext)

    return (
        <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44 items-center grid grid-cols-4 gap-1">

            <Color color ="bg-[#ffffff]" />
            <Color color ="bg-[#000000]" />
            <Color color ="bg-[#7CD3FC]" />
            <Color color ="bg-[#C1400B]" />
            <Color color ="bg-[#FDE046]" />
            <Color color ="bg-[#F77171]" />
            <Color color ="bg-[#c4b5fd]" />
            <Color color ="bg-[#f0abfc]" />
            
            <input type="text" placeholder="#c4b5fd" className="input w-40 h-10 border-2 border-gray-500 text-gray-400" 
            onChange={
                (e) => {
                    const hexCode = e.target.value;
                    const bgClass = getBgClass(hexCode);
                    if (bgClass) {
                        setBgColor(bgClass);
                        console.log(bgClass);
                    }
                }
            }
            />

        </div>
    );
}

const Color = ({color = "bg-[#ffffff]"}:{color: string}) => {

    const { setBgColor, bgColor} = useContext(AppContext);

    return (
        <div className={`${color} w-8 h-8 rounded-xl hover:border-2 border-gray-400 m-1
        ${bgColor === color ? "border-2 border-blue-800" :  ''}`}
        onClick={() => setBgColor(color)}
        >
        </div>
    );
}


export default PlainColors;