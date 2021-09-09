export class CreateDisciplineRequest {
  readonly name: string;
}

export class CreateDisciplineResponse extends CreateDisciplineRequest {
  readonly id: number;
}
