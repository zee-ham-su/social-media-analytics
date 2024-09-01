import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsDataController } from './analytics-data.controller';
import { AnalyticsDataService } from './analytics-data.service';

describe('AnalyticsDataController', () => {
  let controller: AnalyticsDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalyticsDataController],
      providers: [AnalyticsDataService],
    }).compile();

    controller = module.get<AnalyticsDataController>(AnalyticsDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
