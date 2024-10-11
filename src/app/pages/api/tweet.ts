import type { NextApiRequest, NextApiResponse } from 'next';
import { getTweet, } from "react-tweet/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tweetId = req.query.id as string;

  if(req.method !== 'GET' || typeof tweetId !== 'string') {
    res.status(400).json({error: 'Invalid request'});
    return;
  }
  
  try{ 
    const tweet = await getTweet(tweetId);
    res.status(tweet ? 200 : 404).json({data: tweet});
  } catch (error) {
    console.error(error)
    const errorMessage = error instanceof Error ? error.message : 'An error Occuered';
    res.status(400).json({ error: errorMessage });
  }
}
