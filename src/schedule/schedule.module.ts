import { Module } from '@nestjs/common';
import { ScheduleDisciplineController } from './schedule-discipline.controller';
import { ScheduleRecessController } from './schedule-recess.controller';
import { ScheduleController } from './schedule.controller';

@Module({
  controllers: [
    ScheduleController,
    ScheduleDisciplineController,
    ScheduleRecessController,
  ],
})
export class ScheduleModule {}
