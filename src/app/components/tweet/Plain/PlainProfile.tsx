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
                    src = {tweet?.user?.profile_image_url_https || "/images/profile.webp"}
                    alt = "profile"
                    width = {30}
                    height = {30}
                />
                <div className= "flex flex-col">
                <p className={`text-md mb-[-3px] ${textColor}`}>
                {tweet?.user.name || "Raveesh Kumar"}
                </p>
                <p className={`text-md mb-[-3px] ${textColor}`}>
                {tweet?.user.name || "Raveesh Kumar"}
                </p>
                </div>
            </div>
            <BsTwitter className="text-[#1BA0F0] w-6 h-6" />
        </div>
    );
};

export default PlainProfile;