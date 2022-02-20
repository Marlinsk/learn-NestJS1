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
  create(@Body() body) {
    return this.CoursesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.CoursesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CoursesService.remove(id);
  }
}
