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
}