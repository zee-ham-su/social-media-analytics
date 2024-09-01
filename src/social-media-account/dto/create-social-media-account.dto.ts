import { ApiProperty } from '@nestjs/swagger';

export class CreateSocialMediaAccountDto {
    @ApiProperty({
        description: 'The platform of the social media account (e.g., Facebook, Twitter)',
        example: 'Twitter',
    })
    platform: string;

    @ApiProperty({
        description: 'The unique identifier for the social media account',
        example: '1234567890',
    })
    account_id: string;

    @ApiProperty({
        description: 'The access token for the social media account',
        example: 'abcdef123456',
    })
    access_token: string;
}
