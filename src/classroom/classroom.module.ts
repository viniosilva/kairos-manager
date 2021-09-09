import { Module } from '@nestjs/common';
import { ClassroomScheduleController } from './classroom-schedule.controller';
import { ClassroomController } from './classroom.controller';

@Module({
  controllers: [ClassroomController, ClassroomScheduleController],
})
export class ClassroomModule {}
