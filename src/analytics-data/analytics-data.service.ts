import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnalyticsDatumDto } from './dto/create-analytics-datum.dto';
import { UpdateAnalyticsDatumDto } from './dto/update-analytics-datum.dto';
import { AnalyticsData } from './entities/analytics-datum.entity';

@Injectable()
export class AnalyticsDataService {
  constructor(
    @InjectRepository(AnalyticsData)
    private readonly analyticsDataRepository: Repository<AnalyticsData>,
  ) { }

  async create(createDto: CreateAnalyticsDatumDto): Promise<AnalyticsData> {
    const data = this.analyticsDataRepository.create(createDto);
    return this.analyticsDataRepository.save(data);
  }

  async findAll(): Promise<AnalyticsData[]> {
    return this.analyticsDataRepository.find();
  }

  async findOne(id: number): Promise<AnalyticsData> {
    return this.analyticsDataRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDto: UpdateAnalyticsDatumDto): Promise<AnalyticsData> {
    await this.analyticsDataRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.analyticsDataRepository.delete(id);
  }
}
