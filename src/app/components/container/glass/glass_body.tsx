import React from 'react'
import Tweet from './tweet'
import PlainTweet from '../plain/PlainTweet'
import { AppContext } from '@/pages'
import { useContext } from 'react'

const GlassBody = () => {
    
    const {bgColor, bgType, width, height} = useContext(AppContext);
    const scaleBy = width > height ? height :width;
    const maxFactor = 700;
    const scaleFactor = Math.floor(1, maxFactor/scaleBy);
    const scaledWidth = Math.round(width * scaleFactor);
    const scaledHeight = Math.round(height * scaleFactor); 


    return(
        <div className={`relative flex rounded 2xl p-12 ${bgColor} items-center justify-center shadow-2xl`}
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

export default GlassBody


