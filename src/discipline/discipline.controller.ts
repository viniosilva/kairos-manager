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
} from '@nestjs/common';
import {
  CreateDisciplineRequest,
  CreateDisciplineResponse,
} from './dto/create-discipline.dto';
import { FindDisciplineByIdResponse } from './dto/find-discipline-by-id.dto';
import { FindDisciplinesResponse } from './dto/find-disciplines.dto';
import { UpdateDisciplineRequest } from './dto/update-discipline.dto';

@Controller('disciplines')
export class DisciplineController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createDiscipline(
    @Body() request: CreateDisciplineRequest,
  ): CreateDisciplineResponse {
    return { id: 1, name: request.name };
  }

  @Get()
  findDisciplines(): FindDisciplinesResponse {
    return [{ id: 1, name: 'TEST' }];
  }

  @Get(':disciplineId')
  findDisciplineById(
    @Param() disciplineId: number,
  ): FindDisciplineByIdResponse {
    return { id: disciplineId, name: 'TEST' };
  }

  @Put(':disciplineId')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateDiscipline(
    @Param() disciplineId: number,
    @Body() request: UpdateDisciplineRequest,
  ): void {}

  @Delete(':disciplineId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteDiscipline(@Param() disciplineId: number): void {}
}
