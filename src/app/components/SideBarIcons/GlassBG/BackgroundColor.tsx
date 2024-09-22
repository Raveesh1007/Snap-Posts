import React, { useContext } from "react";
import {useState, useEffect} from "react";
import { AppContext } from "@/pages";

const BackgroundColor = () => {
    const {bgColor} = useContext(AppContext);

    return (
        <div className="sidebar_icon flex-col dropdown-right dropdown-hover">
            <div tabIndex={0} className = {"text-3xl ${bgColor} shadow-md rounded-full w-8 h-8 border-2 border-grey-300 item-slate-500"}></div>

            <p className= "icon-text">Color</p>
            <Menu />
        </div>  
    );

}

const Menu = ()=>{
    return (
        <div tabIndex={0} classname = "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44 items-center grid grid-cols-4 gap-1">
            <Color color = "bg-gradient-to-r from-cyan-500 to-light-blue-500"/>
            <Color color = "bg-gradient-to-r from-cyan-500 to-blue-500"/>
            <Color color = "bg-gradient-to-r from-cyan-800 to-blue-500"/>
            <Color color = "bg-gradient-to-r from-cyan-500 to-blue-500"/>
            <Color color = "bg-gradient-to-r from-[#acb6e5] to-[#86fde8]"/>
            <Color color = "bg-gradient-to-r from-[#ffe259] to-[#ffa751]"/>
            <Color color = "bg-gradient-to-r from-[#5433ff] via-[#20bdff] to-[#a5fecb]"/>
            <Color color = "bg-gradient-to-r from-[#c31432] to-[#240b36]"/>
        </div>

    );
}

const Color = ({color = "bg-red"}:{color: string}) =>{
    const {setBgColor, bgColor} = useContext(AppContext);

    return(
        <div className = {`${color} w-8 h-8 rounded-xl hover:border-2 border-gray-400 m-1
        ${bgColor === color ? "border-2 border-blue-800" : ''}`}
        onClick = {() => setBgColor(Color)}>
        </div>
    );
}


export default BackgroundColor;