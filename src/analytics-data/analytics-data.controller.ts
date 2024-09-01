import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalyticsDataService } from './analytics-data.service';
import { CreateAnalyticsDatumDto } from './dto/create-analytics-datum.dto';
import { UpdateAnalyticsDatumDto } from './dto/update-analytics-datum.dto';

@Controller('analytics-data')
export class AnalyticsDataController {
  constructor(private readonly analyticsDataService: AnalyticsDataService) {}

  @Post()
  create(@Body() createAnalyticsDatumDto: CreateAnalyticsDatumDto) {
    return this.analyticsDataService.create(createAnalyticsDatumDto);
  }

  @Get()
  findAll() {
    return this.analyticsDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analyticsDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnalyticsDatumDto: UpdateAnalyticsDatumDto) {
    return this.analyticsDataService.update(+id, updateAnalyticsDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analyticsDataService.remove(+id);
  }
}
