import React from 'react'
import Tweet from './tweet'
import PlainTweet from '../plain/PlainTweet'
import { AppContext } from "../../../context/AppContext";
import { useContext } from 'react'

const Body = () => {

  const {bgColor, bgType, width, height} = useContext(AppContext)
  const scaleBy = width > height ? height : width;
  const maxFactor = 700 // adjust this value as necessary
  const scaleFactor = Math.min(1, maxFactor / scaleBy);
  const scaledWidth = Math.round(width * scaleFactor);
  const scaledHeight = Math.round(height * scaleFactor);


  return (

    <div className={`relative flex  rounded-2xl p-12  ${bgColor} items-center shadow-2xl`}
         style={{
           width: `${scaledWidth}px`,
           height: `${scaledHeight}px`,
         }}>
      {
      bgType === 'Glass' ? <Tweet /> : <PlainTweet />
      }
    </div>

  )
}


export default Body




