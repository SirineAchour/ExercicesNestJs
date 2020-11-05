import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';

@Module({
  imports: [MyFirstModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
