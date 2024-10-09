import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid tweet ID' });
  }

  const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

  if (!BEARER_TOKEN) {
    return res.status(500).json({ error: 'Twitter bearer token is missing' });
  }

  try {
    console.log('Fetching tweet with ID:', id);

    const twitterResponse = await fetch(`https://api.twitter.com/2/tweets/${id}`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    if (!twitterResponse.ok) {
      const errorData = await twitterResponse.json();
      console.error('Twitter API error:', errorData);
      return res.status(twitterResponse.status).json({ error: `Twitter API error: ${errorData.title || twitterResponse.statusText}` });
    }

    const data = await twitterResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching tweet:', error);
    res.status(500).json({ error: 'Failed to fetch tweet' });
  }
}
