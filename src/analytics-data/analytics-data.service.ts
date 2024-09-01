import { Injectable } from '@nestjs/common';
import { CreateAnalyticsDatumDto } from './dto/create-analytics-datum.dto';
import { UpdateAnalyticsDatumDto } from './dto/update-analytics-datum.dto';

@Injectable()
export class AnalyticsDataService {
  create(createAnalyticsDatumDto: CreateAnalyticsDatumDto) {
    return 'This action adds a new analyticsDatum';
  }

  findAll() {
    return `This action returns all analyticsData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} analyticsDatum`;
  }

  update(id: number, updateAnalyticsDatumDto: UpdateAnalyticsDatumDto) {
    return `This action updates a #${id} analyticsDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} analyticsDatum`;
  }
}
