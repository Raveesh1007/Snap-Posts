import { Tweet } from '../container';
import React from 'react'
import { useContext,useState } from 'react'
import { AppContext } from "../../../app/page";





function LinktoId(link: string): string {
  const segments = link.split('/');
  const id = segments[segments.length - 1];

  const match = id.match(/^[0-9]+/);
  if (match) {
    return match[0];
  } else {
    throw new Error('Invalid tweet URL');
  }
}



const SearchBox = () => {

  const { setTweetId } = useContext(AppContext)
  const [search, setSearch] = useState('')

  return (

    <div className='max-w-lg flex-grow relative 
      rounded-xl transition-200 
    input_wrapper transition z-20 bg-slate-50'>
        <input className='w-full pr-12 pl-12 py-3 
        rounded-xl text-black 
        text-opacity-80 dark:text-white 
        dark:text-opacity-90 transition' 
        type='text' 
        placeholder='Paste your Twitter Post URL here' 
        onChange={(e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
        try {
          const tweetId = LinktoId(e.target.value);
          console.log(tweetId)
          setTweetId(tweetId)
        } catch (error) {
          console.log(error)
        }
        }}

      />
        
    </div>

  )
}

export default SearchBox
