export class CreateTeacherRequest {
  readonly name: string;
}

export class CreateTeacherResponse extends CreateTeacherRequest {
  readonly id: number;
}
