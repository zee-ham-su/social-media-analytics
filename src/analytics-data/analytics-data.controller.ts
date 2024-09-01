import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalyticsDataService } from './analytics-data.service';
import { CreateAnalyticsDatumDto } from './dto/create-analytics-datum.dto';
import { UpdateAnalyticsDatumDto } from './dto/update-analytics-datum.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('analytics-data')
@Controller('analytics-data')
export class AnalyticsDataController {
  constructor(private readonly analyticsDataService: AnalyticsDataService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new analytics datum' })
  @ApiResponse({ status: 201, description: 'Analytics datum successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createAnalyticsDatumDto: CreateAnalyticsDatumDto) {
    return this.analyticsDataService.create(createAnalyticsDatumDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all analytics data' })
  @ApiResponse({ status: 200, description: 'List of all analytics data.' })
  findAll() {
    return this.analyticsDataService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single analytics datum by ID' })
  @ApiParam({ name: 'id', description: 'ID of the analytics datum', type: String })
  @ApiResponse({ status: 200, description: 'Analytics datum found.' })
  @ApiResponse({ status: 404, description: 'Analytics datum not found.' })
  findOne(@Param('id') id: string) {
    return this.analyticsDataService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing analytics datum by ID' })
  @ApiParam({ name: 'id', description: 'ID of the analytics datum to update', type: String })
  @ApiResponse({ status: 200, description: 'Analytics datum successfully updated.' })
  @ApiResponse({ status: 404, description: 'Analytics datum not found.' })
  update(@Param('id') id: string, @Body() updateAnalyticsDatumDto: UpdateAnalyticsDatumDto) {
    return this.analyticsDataService.update(+id, updateAnalyticsDatumDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove an analytics datum by ID' })
  @ApiParam({ name: 'id', description: 'ID of the analytics datum to remove', type: String })
  @ApiResponse({ status: 200, description: 'Analytics datum successfully removed.' })
  @ApiResponse({ status: 404, description: 'Analytics datum not found.' })
  remove(@Param('id') id: string) {
    return this.analyticsDataService.remove(+id);
  }
}
