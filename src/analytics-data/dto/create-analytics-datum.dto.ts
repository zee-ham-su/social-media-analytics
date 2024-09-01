import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnalyticsDatumDto {
    @ApiProperty({
        description: 'The metric for the analytics data',
        example: 'user_engagement',
    })
    @IsString()
    @IsNotEmpty()
    metric: string;

    @ApiProperty({
        description: 'The data associated with the metric',
        example: { count: 100, date: '2024-09-01T00:00:00Z' },
        required: false,
    })
    @IsOptional()
    data: any; 
}
