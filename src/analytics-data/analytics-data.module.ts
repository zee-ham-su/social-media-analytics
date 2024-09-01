import { Module } from '@nestjs/common';
import { AnalyticsDataService } from './analytics-data.service';
import { AnalyticsDataController } from './analytics-data.controller';

@Module({
  controllers: [AnalyticsDataController],
  providers: [AnalyticsDataService],
})
export class AnalyticsDataModule {}
