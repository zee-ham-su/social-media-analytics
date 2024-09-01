import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialMediaAccountService } from './social-media-account.service';
import { CreateSocialMediaAccountDto } from './dto/create-social-media-account.dto';
import { UpdateSocialMediaAccountDto } from './dto/update-social-media-account.dto';


@Controller('social-media-accounts')
export class SocialMediaAccountController {
  constructor(private readonly socialMediaAccountService: SocialMediaAccountService) { }

  @Post()
  create(@Body() createDto: CreateSocialMediaAccountDto) {
    return this.socialMediaAccountService.create(createDto);
  }

  @Get()
  findAll() {
    return this.socialMediaAccountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialMediaAccountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateSocialMediaAccountDto) {
    return this.socialMediaAccountService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialMediaAccountService.remove(+id);
  }
}
