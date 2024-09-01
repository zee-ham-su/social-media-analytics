import { Controller, Get, Param } from '@nestjs/common';
import { TwitterService } from './twitter.service';

@Controller('twitter')
export class TwitterController {
    constructor(private readonly twitterService: TwitterService) { }

    @Get('tweet/:id')
    async getTweet(@Param('id') id: string) {
        return await this.twitterService.getTweetById(id);
    }

    @Get('stream')
    async streamTweets() {
        return await this.twitterService.streamTweets();
    }

}
