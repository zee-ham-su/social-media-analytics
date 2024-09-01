import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AlertService } from './alert.service';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';

@ApiTags('alerts') // Tag for grouping the endpoints in Swagger
@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new alert' }) // Description of the operation
  @ApiResponse({ status: 201, description: 'The alert has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createAlertDto: CreateAlertDto) {
    return this.alertService.create(createAlertDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all alerts' })
  @ApiResponse({ status: 200, description: 'List of all alerts.' })
  findAll() {
    return this.alertService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an alert by ID' })
  @ApiResponse({ status: 200, description: 'Details of the alert.' })
  @ApiResponse({ status: 404, description: 'Alert not found.' })
  findOne(@Param('id') id: string) {
    return this.alertService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an alert by ID' })
  @ApiResponse({ status: 200, description: 'The alert has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Alert not found.' })
  update(@Param('id') id: string, @Body() updateAlertDto: UpdateAlertDto) {
    return this.alertService.update(+id, updateAlertDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove an alert by ID' })
  @ApiResponse({ status: 200, description: 'The alert has been successfully removed.' })
  @ApiResponse({ status: 404, description: 'Alert not found.' })
  remove(@Param('id') id: string) {
    return this.alertService.remove(+id);
  }
}
