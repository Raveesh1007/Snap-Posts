import { NextApiRequest, NextApiResponse } from "next";
import {getTweet, type Tweet} from "react-tweet/api";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const {id} = req.query;
    const tweetId =(id as string);

    try {
        const tweet = id ? await getTweet(tweetId) : null;

        console.log(tweet);
        res.status(200).json(tweet);
    } catch (error){
        res.status(404).json({error: "Tweet not found"});
    }
}