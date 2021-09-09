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
import { CreateScheduleDisciplineRequest } from './dto/create-schedule-discipline.dto';
import {
  CreateScheduleRequest,
  CreateScheduleResponse,
} from './dto/create-schedule.dto';
import { FindScheduleByIdResponse } from './dto/find-schedule-by-id.dto';
import { FindSchedulesResponse } from './dto/find-schedules.dto';
import { UpdateScheduleRequest } from './dto/update-schedule.dto';

@Controller('schedules')
export class ScheduleController {
  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createSchedule(
    @Body() request: CreateScheduleRequest,
  ): CreateScheduleResponse {
    return { id: 1, disciplineId: request.disciplineId, grade: request.grade };
  }

  @Get()
  findSchedules(): FindSchedulesResponse {
    return [{ id: 1, disciplineId: 1, grade: '1' }];
  }

  @Get(':scheduleId')
  findScheduleById(@Param() scheduleId: number): FindScheduleByIdResponse {
    return { id: scheduleId, disciplineId: 1, grade: '1' };
  }

  @Put(':scheduleId')
  updateSchedule(
    @Param() scheduleId: number,
    @Body() request: UpdateScheduleRequest,
  ): void {}

  @Delete(':scheduleId')
  deleteSchedule(@Param() scheduleId: number): void {}

  @Post(':scheduleId/disciplines')
  createDiscipline(@Body() request: CreateScheduleDisciplineRequest): void {}

  @Delete(':scheduleId/disciplines/:disciplineId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteDiscipline(
    @Param() scheduleId: number,
    @Param() disciplineId: number,
  ): void {}
}
