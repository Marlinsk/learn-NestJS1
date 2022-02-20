import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { response } from 'express';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos');
  }

  //   Exemplo de declaração #1 com parametrização
  //   @Get(':id')
  //   findOne(@Param() params) {
  //     return `Curso #${params.id}`;
  //   }

  // Exemplo de declaração #2 com desestruturação
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  //   Exemplo de declaração #1
  //   @Post('/create')
  //   @HttpCode(HttpStatus.NO_CONTENT)
  //   create(@Body('name') body) {
  //     return body;
  //   }

  // Exemplo de declaração #2
  @Post('/create')
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do Curso #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Curso #${id} excluído`;
  }
}
