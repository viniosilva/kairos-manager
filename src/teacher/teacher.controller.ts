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
  CreateTeacherRequest,
  CreateTeacherResponse,
} from './dto/create-teacher.dto';
import { FindTeacherByIdResponse } from './dto/find-teacher-by-id.dto';
import { FindTeachersResponse } from './dto/find-teachers.dto';
import { UpdateTeacherRequest } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createTeacher(@Body() request: CreateTeacherRequest): CreateTeacherResponse {
    return { id: 1, name: request.name };
  }

  @Get()
  findTeachers(): FindTeachersResponse {
    return [{ id: 1, name: 'TEST' }];
  }

  @Get(':teacherId')
  findTeacherById(@Param() teacherId: number): FindTeacherByIdResponse {
    return { id: teacherId, name: 'TEST' };
  }

  @Put(':teacherId')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateTeacher(
    @Param() teacherId: number,
    @Body() request: UpdateTeacherRequest,
  ): void {}

  @Delete(':teacherId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteTeacher(@Param() teacherId: number): void {}
}
