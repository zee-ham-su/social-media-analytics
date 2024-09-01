import { Test, TestingModule } from '@nestjs/testing';
import { SocialMediaAccountController } from './social-media-account.controller';
import { SocialMediaAccountService } from './social-media-account.service';

describe('SocialMediaAccountController', () => {
  let controller: SocialMediaAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialMediaAccountController],
      providers: [SocialMediaAccountService],
    }).compile();

    controller = module.get<SocialMediaAccountController>(SocialMediaAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
