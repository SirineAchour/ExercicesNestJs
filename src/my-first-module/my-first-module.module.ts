import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo/todo.controller';
import { TodoService } from './services/todo/todo.service';
import { DiversController } from './controllers/divers/divers.controller';

@Module({
  controllers: [TodoController, DiversController],
  providers: [TodoService],
})
export class MyFirstModuleModule {}
