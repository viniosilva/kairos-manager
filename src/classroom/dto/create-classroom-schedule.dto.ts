import { WeekdayEnum } from 'src/schedule/enum/weekday.enum';

export class CreateClassroomScheduleRequest {
  readonly scheduleId: number;
}

class ClassroomSchedule {
  readonly id: number;
  readonly disciplineId: number;
  readonly durationMinutes: number;
  readonly timestampStart: string;
  readonly weekday: WeekdayEnum;
}

export type CreateClassroomScheduleResponse = ClassroomSchedule[];
