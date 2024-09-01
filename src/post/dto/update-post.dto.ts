import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString, IsInt } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    @ApiProperty({
        description: 'ID of the social media account associated with the post',
        example: 1,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    readonly account_id?: number;

    @ApiProperty({
        description: 'The platform where the post was made (e.g., Twitter, Facebook)',
        example: 'Twitter',
        required: false,
    })
    @IsOptional()
    @IsString()
    readonly platform?: string;

    @ApiProperty({
        description: 'Unique ID of the post on the platform',
        example: '1234567890',
        required: false,
    })
    @IsOptional()
    @IsNumber()
    readonly post_id?: number;

    @ApiProperty({
        description: 'Content of the post',
        example: 'This is a sample post.',
        required: false,
    })
    @IsOptional()
    @IsString()
    readonly content?: string;

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
