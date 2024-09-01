import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsInt } from 'class-validator';

export class CreatePostDto {
    @ApiProperty({
        description: 'ID of the social media account associated with the post',
        example: 1,
    })
    @IsNotEmpty()
    @IsNumber()
    readonly account_id: number;

    @ApiProperty({
        description: 'The platform where the post was made (e.g., Twitter, Facebook)',
        example: 'Twitter',
    })
    @IsNotEmpty()
    @IsString()
    readonly platform: string;

    @ApiProperty({
        description: 'Unique ID of the post on the platform',
        example: '1234567890',
    })
    @IsNotEmpty()
    @IsNumber()
    readonly post_id: number;

    @ApiProperty({
        description: 'Content of the post',
        example: 'This is a sample post.',
    })
    @IsNotEmpty()
    @IsString()
    readonly content: string;

    @ApiProperty({
        description: 'Number of likes on the post',
        example: 100,
        required: false,
    })
    @IsOptional()
    @IsInt()
    readonly likes?: number;

    @ApiProperty({
        description: 'Number of comments on the post',
        example: 10,
        required: false,
    })
    @IsOptional()
    @IsInt()
    readonly comments?: number;

    @ApiProperty({
        description: 'Number of shares of the post',
        example: 5,
        required: false,
    })
    @IsOptional()
    @IsInt()
    readonly shares?: number;
}
