import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTeacherDisciplineRequest } from './dto/create-teacher-discipline.dto';
import { UpdateTeacherDisciplineRequest } from './dto/update-teacher-discipline.dto';

@Controller('teachers/:teacherId/disciplines')
export class TeacherDisciplineController {
  @Post()
  createTeacherDiscipline(
    @Param() teacherId: number,
    @Body() request: CreateTeacherDisciplineRequest,
  ): void {}

  @Put(':disciplineId')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateTeacherDiscipline(
    @Param() teacherId: number,
    @Param() disciplineId: number,
    @Body() request: UpdateTeacherDisciplineRequest,
  ): void {}

  @Delete(':disciplineId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteTeacherDiscipline(
    @Param() teacherId: number,
    @Param() disciplineId: number,
  ): void {}
}
