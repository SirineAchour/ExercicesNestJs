import { Controller, Get, Post, Put, Delete, Param, Query, ParseIntPipe, Req, Request, Body } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import  {Todo} from '../../models/todo.model'

@Controller('todos')
export class FirstControllerController {
    todos : Todo[] = [];
    
    constructor(){
        this.todos = [
            new Todo(),
        ]
    }

    getIndexOfTodo(id: string) : number{
        let index = 0;
        for (; index < this.todos.length; index++) {
            if(this.todos[index].getId() == id)
                break;
        }

        return index;
    }
    @Get('todos')
    get():Todo[]{
        return this.todos;
    }

    @Get('todo/:id') // get todo
    get_todo(@Param('id') id : string){
        for (let index = 0; index < this.todos.length; index++) {
            if(this.todos[index].getId() == id){
                return this.todos[index]
            }
        }
        return "not found";
    }
    
    @Post('todo') //new todo
    post(@Body() b){
        this.todos.push(new Todo(uuidv4(),b["name"],b["description"]));
        return "done";
    }

    @Delete('delete') //delete todo
    del(@Body("id") id:string){
        let index = this.getIndexOfTodo(id);

        if (index < this.todos.length) {
            this.todos.splice(index, 1);
        }

        return "done";
    }

    @Put('update') //update todo
    put(@Body() b):string{
        let index = this.getIndexOfTodo(b["id"]);

        if (index < this.todos.length) {
            if(b["name"])
                this.todos[index].setName(b["name"])
            if(b["description"])
                this.todos[index].setDescription(b["description"])
            if(b["name"])
                this.todos[index].setStatus(b["status"])
        }
        return "done";
    }

}
