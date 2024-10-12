'use server';

import { getTweet, type Tweet } from 'react-tweet/api';

export async function fetchTweetById(tweetId: string, fetchOptions: RequestInit = {}): Promise<Tweet> {
  try {
    if (!tweetId) {
      throw new Error('Tweet ID is missing');
    }

    const tweet = await getTweet(tweetId, fetchOptions);

    if (!tweet) {
      throw new Error('Tweet not found or undefined');
    }

    return tweet;

  } catch (error) {
    console.error('Error fetching tweet:', error);
    throw new Error(`Error fetching tweet: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
