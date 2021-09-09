import { WeekdayEnum } from '../enum/weekday.enum';

export class CreateScheduleRecessRequest {
  readonly durationMinutes: number;
  readonly timestampStart: string;
  readonly weekday: WeekdayEnum;
}
