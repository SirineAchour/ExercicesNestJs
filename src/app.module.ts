import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { TodoController } from './my-first-module/controllers/todo/todo.controller';
import { TodoService } from './my-first-module/services/todo/todo.service';

@Module({
  imports: [MyFirstModuleModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
