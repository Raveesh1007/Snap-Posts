import { createContext } from 'react';
import { Tweet as TweetData } from 'react-tweet/api';

interface AppContextType {
  bgType: string;
  setBgType: (bgType: string) => void;
  response: boolean;
  setResponse: (response: boolean) => void;
  bgColor: string;
  setBgColor: (bgColor: string) => void;
  fontSize: string;
  setFontSize: (fontSize: string) => void;
  cardColor: string;
  setCardColor: (cardColor: string) => void;
  onButtonClick: () => void;
  tweetId: string;
  setTweetId: (tweetId: string) => void;
  tweet: TweetData | null;
  setTweet: (tweet: TweetData | null) => void;
  height: number;
  setHeight: (height: number) => void;
  width: number;
  setWidth: (width: number) => void;
  textColor: string;
  setTextColor: (textColor: string) => void;
  favicon: string;
  setFavicon: (favicon: string) => void;
}

export const AppContext = createContext<AppContextType>({
  bgType: '',
  setBgType: () => {},
  response: false,
  setResponse: () => {},
  bgColor: '',
  setBgColor: () => {},
  fontSize: '',
  setFontSize: () => {},
  cardColor: '',
  setCardColor: () => {},
  onButtonClick: () => {},
  tweetId: '',
  setTweetId: () => {},
  tweet: null,
  setTweet: () => {},
  height: 0,
  setHeight: () => {},
  width: 0,
  setWidth: () => {},
  textColor: '',
  setTextColor: () => {},
  favicon: '',
  setFavicon: () => {},
});
