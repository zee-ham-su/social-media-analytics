import { Injectable } from '@nestjs/common';
import { Client } from 'twitter-api-sdk';

@Injectable()
export class TwitterService {
    private client: Client;

    constructor() {
        const bearerToken = process.env.TWITTER_BEARER_TOKEN;
        if (!bearerToken) {
            throw new Error('Bearer token is not provided');
        }
        this.client = new Client(bearerToken);
    }

    async getTweetById(tweetId: string): Promise<any> {
        try {
            const tweet = await this.client.tweets.findTweetById(tweetId);
            return tweet.data;
        } catch (error) {
            console.error(`Failed to fetch tweet: ${error.message}`);
            throw new Error(`Failed to fetch tweet: ${error.message}`);
        }
    }

    async streamTweets(): Promise<void> {
        try {
            const stream = this.client.tweets.sampleStream({
                'tweet.fields': ['author_id'],
            });

            for await (const tweet of stream) {
                console.log('Received tweet:', tweet.data);
            }
        } catch (error) {
            console.error('Error streaming tweets:', error.message);
            throw new Error(`Failed to stream tweets: ${error.message}`);
        }
    }
}
