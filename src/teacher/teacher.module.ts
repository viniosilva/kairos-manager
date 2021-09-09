import { Module } from '@nestjs/common';
import { TeacherDisciplineController } from './teacher-discipline.controller';
import { TeacherController } from './teacher.controller';

@Module({
  controllers: [TeacherController, TeacherDisciplineController],
})
export class TeacherModule {}
