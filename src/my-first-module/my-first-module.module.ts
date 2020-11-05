import { Module } from '@nestjs/common';
import { FirstControllerController } from './controllers/first-controller/first-controller.controller';

@Module({
  controllers: [FirstControllerController]
})
export class MyFirstModuleModule {}
