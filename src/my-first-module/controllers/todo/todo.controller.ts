import { Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
  } from '@nestjs/common';
import { AddTodoDTO } from 'src/my-first-module/DTOs/addTodo.dto';
import { UpdateTodoDTO } from 'src/my-first-module/DTOs/updateTodo.dto';
import { TodoService } from 'src/my-first-module/services/todo/todo.service';
import { Todo } from '../../models/todo.model';

@Controller('todo')
export class TodoController {

    constructor(private todoService : TodoService) {
      
    }
    
    @Get('todos')
    get(): Todo[] {
      return this.todoService.getTodos();
    }
  
    @Get('todo/:id') // get todo
    getTodoById(@Param('id') id) {
      return this.todoService.get_todo(id)
    }
  
    @Post('todo') //new todo  //DTO
    post(@Body() b: AddTodoDTO) {
      this.todoService.addTodo(b)
    }
  
    @Delete('delete') //delete todo
    del(@Body('id') id: string) {
      return this.todoService.deleteTodo(id)
    }
  
    @Put('update') //update todo //DTO
    put(@Body() b: UpdateTodoDTO): string {
      return this.todoService.updateTodo(b)
    }
}
