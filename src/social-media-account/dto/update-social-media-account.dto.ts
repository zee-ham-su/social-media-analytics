import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialMediaAccountDto } from './create-social-media-account.dto';

export class UpdateSocialMediaAccountDto extends PartialType(CreateSocialMediaAccountDto) {
    platform?: string;
    access_token?: string;
}
