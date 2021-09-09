export class CreateClassroomRequest {
  readonly name: string;
}

export class CreateClassroomResponse extends CreateClassroomRequest {
  readonly id: number;
}
