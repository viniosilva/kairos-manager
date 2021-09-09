import { WeekdayEnum } from '../enum/weekday.enum';

export class UpdateScheduleDisciplineRequest {
  readonly disciplineId: number;
  readonly durationMinutes: number;
  readonly timestampStart: string;
  readonly weekday: WeekdayEnum;
}
