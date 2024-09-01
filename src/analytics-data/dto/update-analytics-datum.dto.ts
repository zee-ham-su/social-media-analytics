import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalyticsDatumDto } from './create-analytics-datum.dto';

export class UpdateAnalyticsDatumDto extends PartialType(CreateAnalyticsDatumDto) {}
