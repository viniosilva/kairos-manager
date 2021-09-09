import { WeekdayEnum } from 'src/schedule/enum/weekday.enum';

export class CreateClassroomScheduleTeacherRequest {
  readonly teacherId: number;
}

export class CreateClassroomScheduleTeacherResponse {
  readonly id: number;
  readonly disciplineId: number;
  readonly teacherId: number;
  readonly durationMinutes: number;
  readonly timestampStart: string;
  readonly weekday: WeekdayEnum;
}
