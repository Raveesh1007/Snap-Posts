import React, { useContext, useState } from 'react';
import { AppContext } from "../../context/AppContext";
import { fetchTweetById } from '../../tweet/action';

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
  const { setTweetId, setTweet } = useContext(AppContext);
  const [search, setSearch] = useState('');

  const handleSearch = async (tweetId: string) => {
    try {
      const fetchedTweet = await fetchTweetById(tweetId);
      if (fetchedTweet) {
        setTweet(fetchedTweet);
        console.log('Fetched tweet data:', fetchedTweet);
      } else {
        console.error('Tweet not found');
      }
    } catch (error) {
      console.error('Error fetching tweet:', error);
    }
  };

  return (
    <div className='max-w-lg flex-grow relative rounded-xl transition-200 input_wrapper transition z-20 bg-slate-50'>
      <input
        className='w-full pr-12 pl-12 py-3 rounded-xl text-black text-opacity-80 dark:text-white dark:text-opacity-90 transition'
        type='text'
        placeholder='Paste your Twitter Post URL here'
        onChange={(e) => {
          setSearch(e.target.value);
          try {
            const tweetId = LinktoId(e.target.value);
            setTweetId(tweetId);
            handleSearch(tweetId);
          } catch (error) {
            console.log('Invalid tweet URL:', error);
          }
        }}
      />
    </div>
  );
};

export default SearchBox;
