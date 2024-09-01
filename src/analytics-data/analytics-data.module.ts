import { Module } from '@nestjs/common';
import { AnalyticsDataService } from './analytics-data.service';
import { AnalyticsDataController } from './analytics-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsData } from './entities/analytics-datum.entity';


@Module({
  imports: [TypeOrmModule.forFeature([AnalyticsData])],
  controllers: [AnalyticsDataController],
  providers: [AnalyticsDataService],
})
export class AnalyticsDataModule {}
