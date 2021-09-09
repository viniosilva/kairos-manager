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
import { CreateScheduleRecessRequest } from './dto/create-schedule-recess.dto';
import { UpdateScheduleRecessRequest } from './dto/update-schedule-recess.dto';
import { WeekdayEnum } from './enum/weekday.enum';

@Controller('schedules/:scheduleId/recesses')
export class ScheduleRecessController {
  @Post()
  createScheduleRecess(
    @Param() scheduleId: number,
    @Body() request: CreateScheduleRecessRequest,
  ): void {}

  @Put(':weekday')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateScheduleRecess(
    @Param() scheduleId: number,
    @Param() weekday: WeekdayEnum,
    @Body() request: UpdateScheduleRecessRequest,
  ): void {}

  @Delete(':weekday')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteScheduleRecess(
    @Param() scheduleId: number,
    @Param() weekday: WeekdayEnum,
  ): void {}
}
