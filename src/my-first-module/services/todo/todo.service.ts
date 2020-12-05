import { Injectable } from '@nestjs/common';
import { AddTodoDTO } from 'src/my-first-module/DTOs/addTodo.dto';
import { UpdateTodoDTO } from 'src/my-first-module/DTOs/updateTodo.dto';
import { Todo } from 'src/my-first-module/models/todo.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
    todos: Todo[] = [];
    
    constructor(){
        this.todos = [new Todo()];
    }

    getIndexOfTodo(id: string): number {
        let index = 0;
        for (; index < this.todos.length; index++) {
          if (this.todos[index].getId() == id) break;
        }
    
        return index;
      }

      getTodos(): Todo[] {
        return this.todos;
      }
    
      get_todo( id: string) {
        for (let index = 0; index < this.todos.length; index++) {
          if (this.todos[index].getId() == id) {
            return this.todos[index];
          }
        }
        return 'not found';
      }
    
      addTodo(todo: AddTodoDTO) {
        this.todos.push(new Todo(uuidv4(), todo['name'], todo['description']));
        return 'done';
      }
    
      deleteTodo(id: string) {
        const index = this.getIndexOfTodo(id);
    
        if (index < this.todos.length) {
          this.todos.splice(index, 1);
        }
    
        return 'done';
      }
    
      updateTodo(newTodo: UpdateTodoDTO): string {
        const index = this.getIndexOfTodo(newTodo['id']);
    
        if (index < this.todos.length) {
            if (newTodo['name']) {
                this.todos[index].setName(newTodo['name']);
            }
            if (newTodo['status']){
                this.todos[index].setStatus(newTodo['status']);
            }
            if (newTodo['description']) this.todos[index].setDescription(newTodo['description']);
        }
        return 'done';
      }
}
