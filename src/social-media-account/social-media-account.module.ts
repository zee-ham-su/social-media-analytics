import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialMediaAccountService } from './social-media-account.service';
import { SocialMediaAccountController } from './social-media-account.controller';
import { SocialMediaAccount } from './entities/social-media-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialMediaAccount])],
  controllers: [SocialMediaAccountController],
  providers: [SocialMediaAccountService],
})
export class SocialMediaAccountModule { }
