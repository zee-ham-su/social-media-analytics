import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { FacebookService } from './facebook.service';
import { InstagramService } from './instagram.service';
import { TwitterService } from './twitter.service';

@Controller('social-media')
@ApiTags('Social Media')
export class SocialMediaController {
  constructor(
    private readonly facebookService: FacebookService,
    private readonly instagramService: InstagramService,
    private readonly twitterService: TwitterService
  ) { }

  @Get('facebook/posts/:pageId')
  @ApiOperation({ summary: 'Fetch Facebook posts by page ID' })  // Description for the endpoint
  @ApiParam({ name: 'pageId', description: 'The ID of the Facebook page', example: '123456789' })  // Parameter description
  async getFacebookPosts(@Param('pageId') pageId: string) {
    return this.facebookService.fetchPosts(pageId);
  }

  @Get('instagram/posts/:userId')
  @ApiOperation({ summary: 'Fetch Instagram posts by user ID' })
  @ApiParam({ name: 'userId', description: 'The ID of the Instagram user', example: 'abcdefg123' })
  async getInstagramPosts(@Param('userId') userId: string) {
    return this.instagramService.fetchPosts(userId);
  }

  // @Get('twitter/posts/:username')
  // @ApiOperation({ summary: 'Fetch Twitter posts by username' })
  // @ApiParam({ name: 'username', description: 'The Twitter username', example: 'twitter_user' })
  // async getTwitterPosts(@Param('username') username: string) {
  //   return this.twitterService.fetchPosts(username);
  // }
}
