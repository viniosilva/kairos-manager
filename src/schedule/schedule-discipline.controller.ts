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
import { CreateScheduleDisciplineRequest } from './dto/create-schedule-discipline.dto';
import { UpdateScheduleDisciplineRequest } from './dto/update-schedule-discipline.dto';

@Controller('schedules/:scheduleId/disciplines')
export class ScheduleDisciplineController {
  @Post()
  createScheduleDiscipline(
    @Body() request: CreateScheduleDisciplineRequest,
  ): void {}

  @Put(':disciplineId')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateScheduleRecess(
    @Param() scheduleId: number,
    @Param() disciplineId: number,
    @Body() request: UpdateScheduleDisciplineRequest,
  ): void {}

  @Delete(':disciplineId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteScheduleDiscipline(
    @Param() scheduleId: number,
    @Param() disciplineId: number,
  ): void {}
}
