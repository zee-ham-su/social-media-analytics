import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlertDto {
    @ApiProperty({
        description: 'Type of the alert (e.g., error, warning, info)',
        example: 'error',
    })
    @IsString()
    @IsNotEmpty()
    type: string;

    @ApiProperty({
        description: 'The message content of the alert',
        example: 'An error has occurred while processing your request.',
    })
    @IsString()
    @IsNotEmpty()
    message: string;
}
