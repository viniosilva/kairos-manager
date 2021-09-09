export class CreateScheduleRequest {
  readonly disciplineId: number;
  readonly grade: string;
}

export class CreateScheduleResponse extends CreateScheduleRequest {
  readonly id: number;
}
