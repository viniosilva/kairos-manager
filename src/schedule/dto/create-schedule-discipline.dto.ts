import { WeekdayEnum } from '../enum/weekday.enum';

export class CreateScheduleDisciplineRequest {
  readonly disciplineId: number;
  readonly durationMinutes: number;
  readonly timestampStart: string;
  readonly weekday: WeekdayEnum;
}

export class CreateScheduleDisciplineResponse extends CreateScheduleDisciplineRequest {
  readonly id: number;
}
