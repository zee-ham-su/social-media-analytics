import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('posts')
@Controller('post')
@UseGuards(JwtAuthGuard)
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiBody({ type: CreatePostDto })
  @ApiResponse({ status: 201, description: 'The post has been created.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, description: 'List of all posts.' })
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single post by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the post to retrieve' })
  @ApiResponse({ status: 200, description: 'The post has been retrieved.' })
  @ApiResponse({ status: 404, description: 'Post not found.' })
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a post by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the post to update' })
  @ApiBody({ type: UpdatePostDto })
  @ApiResponse({ status: 200, description: 'The post has been updated.' })
  @ApiResponse({ status: 404, description: 'Post not found.' })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a post by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the post to delete' })
  @ApiResponse({ status: 200, description: 'The post has been deleted.' })
  @ApiResponse({ status: 404, description: 'Post not found.' })
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
