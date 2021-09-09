import { Module } from '@nestjs/common';
import { ClassroomModule } from './classroom/classroom.module';
import { DisciplineModule } from './discipline/discipline.module';
import { ScheduleModule } from './schedule/schedule.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [ClassroomModule, DisciplineModule, ScheduleModule, TeacherModule],
})
export class AppModule {}
