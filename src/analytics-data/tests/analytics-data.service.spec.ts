import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsDataService } from './analytics-data.service';

describe('AnalyticsDataService', () => {
  let service: AnalyticsDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyticsDataService],
    }).compile();

    service = module.get<AnalyticsDataService>(AnalyticsDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
