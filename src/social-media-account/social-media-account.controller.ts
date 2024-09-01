import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { SocialMediaAccountService } from './social-media-account.service';
import { CreateSocialMediaAccountDto } from './dto/create-social-media-account.dto';
import { UpdateSocialMediaAccountDto } from './dto/update-social-media-account.dto';

@ApiTags('social-media-accounts')
@Controller('social-media-accounts')
export class SocialMediaAccountController {
  constructor(private readonly socialMediaAccountService: SocialMediaAccountService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new social media account' })
  @ApiBody({ type: CreateSocialMediaAccountDto })
  @ApiResponse({ status: 201, description: 'The social media account has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createDto: CreateSocialMediaAccountDto) {
    return this.socialMediaAccountService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all social media accounts' })
  @ApiResponse({ status: 200, description: 'List of social media accounts.' })
  findAll() {
    return this.socialMediaAccountService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a social media account by its ID' })
  @ApiResponse({ status: 200, description: 'The social media account with the given ID.' })
  @ApiResponse({ status: 404, description: 'Social media account not found.' })
  findOne(@Param('id') id: string) {
    return this.socialMediaAccountService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a social media account by its ID' })
  @ApiBody({ type: UpdateSocialMediaAccountDto })
  @ApiResponse({ status: 200, description: 'The social media account has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Social media account not found.' })
  update(@Param('id') id: string, @Body() updateDto: UpdateSocialMediaAccountDto) {
    return this.socialMediaAccountService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a social media account by its ID' })
  @ApiResponse({ status: 200, description: 'The social media account has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Social media account not found.' })
  remove(@Param('id') id: string) {
    return this.socialMediaAccountService.remove(+id);
  }
}
