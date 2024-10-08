import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../page";

function convertDate(dateStr: string): string {
    const date = new Date(dateStr);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const AmPm = date.getHours() >= 12 ? "PM" : "AM";
    const hour12 = date.getHours() % 12 || 12;
    const timeString = `${hour12}:${minutes.toString().padStart(2, '0')} ${AmPm}`;
    const dateString = `${day} ${month} ${year}`;

    return `${timeString} · ${dateString}`;
}

const Time = () => {
    const { tweet, cardColor } = useContext(AppContext);
    
    const createdTime = convertDate(tweet?.created_at || "Friday Oct 4 19:33:00 2024")

    return (
        <p className={`${ cardColor === "Dark" ? ' text-gray-200 ' : 'text-gray-700 '} w-full mx-2 text-lg opacity-60 `}>
          {createdTime}
        </p>
    );
}


export default Time;