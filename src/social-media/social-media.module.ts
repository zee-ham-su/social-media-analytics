import { Module} from '@nestjs/common';
import { SocialMediaController } from './social-media.controller';
import { InstagramService } from './instagram.service';
import { FacebookService } from './facebook.service';
import { TwitterService } from './twitter.service';
import { HttpModule } from '@nestjs/axios';
import { TwitterController } from './twitter.controller';

@Module({
  imports: [HttpModule],
  providers: [FacebookService, InstagramService, TwitterService],
  controllers: [SocialMediaController, TwitterController],
  exports: [FacebookService, InstagramService, TwitterService],
})
export class SocialMediaModule { }
