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
  CreateClassroomRequest,
  CreateClassroomResponse,
} from './dto/create-classroom.dto';
import { FindClassroomByIdResponse } from './dto/find-classroom-by-id.dto';
import { FindClassroomsResponse } from './dto/find-classrooms.dto';
import { UpdateClassroomRequest } from './dto/update-classroom.dto';

@Controller('classrooms')
export class ClassroomController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createClassroom(
    @Body() request: CreateClassroomRequest,
  ): CreateClassroomResponse {
    return { id: 1, name: request.name };
  }

  @Get()
  findClassrooms(): FindClassroomsResponse {
    return [{ id: 1, name: 'TEST' }];
  }

  @Get(':classroomId')
  findClassroomById(@Param() classroomId: number): FindClassroomByIdResponse {
    return { id: classroomId, name: 'TEST' };
  }

  @Put(':classroomId')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateClassroom(
    @Param() classroomId: number,
    @Body() request: UpdateClassroomRequest,
  ): void {}

  @Delete(':classroomId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteClassroom(@Param() classroomId: number): void {}
}
