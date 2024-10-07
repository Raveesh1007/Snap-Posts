import React from "react";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../../../pages";

const PlainProfile =() =>{
    const {tweet, textColor} = useContext(AppContext);
    

    return (
        <div className="w-full flex justify-between">
            <div className="flex justify-start">
                <Image 
                    className="rounded-full w-10 h-10 mx-2"
            </div>
        </div>
    )
}