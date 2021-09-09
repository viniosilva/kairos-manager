import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { WeekdayEnum } from 'src/schedule/enum/weekday.enum';
import {
  CreateClassroomScheduleTeacherRequest,
  CreateClassroomScheduleTeacherResponse,
} from './dto/create-classroom-schedule-teacher.dto';

@Controller('classrooms/:classroomId/schedules/:scheduleId/teachers')
export class ClassroomScheduleController {
  @Post()
  addClassroomScheduleTeacher(
    @Param() classroomId: number,
    @Param() scheduleId: number,
    @Body() request: CreateClassroomScheduleTeacherRequest,
  ): CreateClassroomScheduleTeacherResponse {
    return {
      id: scheduleId,
      disciplineId: 1,
      teacherId: request.teacherId,
      durationMinutes: 45,
      timestampStart: '09:00',
      weekday: WeekdayEnum.FRIDAY,
    };
  }

  @Delete(':teacherId')
  removeClassroomScheduleTeacher(
    @Param() classroomId: number,
    @Param() scheduleId: number,
    @Param() teacherId: number,
  ): void {}
}
