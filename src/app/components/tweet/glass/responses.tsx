import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../pages'

const Responses = () =>{
    const {cardColor, tweet} = useContext(AppContext);

    const favCount = tweet?.favorite_count ?? 0;

    return (
        <div className={`w-full flex justify-start  gap-2 ml-2 
        ${cardColor == "Dark"? 'text-gray-100':'text-gray-700'  }`}>
          {
          favCount > 0 ? favCount : ''
          }
          {favCount > 0 && <p className='opacity-70'>likes </p>}
         
          </div>        
      )
    }
    
    export default Response