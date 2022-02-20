import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto.ts';
import { UpdateCourseDto } from './dto/update-course.dto.ts';

@Controller('courses')
export class CoursesController {
  constructor(private readonly CoursesService: CoursesService) {}
  @Get('list')
  findAll() {
    return this.CoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CoursesService.findOne(id);
  }

  @Post('/create')
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.CoursesService.create(createCourseDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.CoursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CoursesService.remove(id);
  }
}
