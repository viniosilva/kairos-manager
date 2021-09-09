import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { WeekdayEnum } from 'src/schedule/enum/weekday.enum';
import {
  CreateClassroomScheduleRequest,
  CreateClassroomScheduleResponse,
} from './dto/create-classroom-schedule.dto';

@Controller('classrooms/:classroomId/schedules')
export class ClassroomScheduleController {
  @Post()
  createClassroomSchedule(
    @Param() classroomId: number,
    @Body() request: CreateClassroomScheduleRequest,
  ): CreateClassroomScheduleResponse {
    return [
      {
        id: 1,
        disciplineId: 1,
        durationMinutes: 45,
        timestampStart: '09:00',
        weekday: WeekdayEnum.FRIDAY,
      },
    ];
  }

  @Delete(':scheduleId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteClassroomSchedule(
    @Param() classroomId: number,
    @Param() scheduleId: number,
  ): void {}
}
