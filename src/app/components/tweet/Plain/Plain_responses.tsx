import React from 'react'
import { useContext } from 'react'
import { AppContext } from "../../../context/AppContext";


const PlainResponse = () => {
    const { cardColor,tweet,textColor } = useContext(AppContext)

    const favCount = tweet?.favorite_count ?? 4444
   

  return (
    <div className={`w-full flex font-bold justify-start gap-2  ${textColor}`}>
      {
      favCount > 0 ? favCount : ''
      }
      {favCount > 0 && <p className='opacity-70'>likes </p>}
      
      </div>        
  )
}

export default PlainResponse