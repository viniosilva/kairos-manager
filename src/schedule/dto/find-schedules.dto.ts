class Schedule {
  readonly id: number;
  readonly disciplineId: number;
  readonly grade: string;
}

export type FindSchedulesResponse = Schedule[];
