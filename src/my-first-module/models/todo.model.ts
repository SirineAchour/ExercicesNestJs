import { TodoStatus } from "../enums/todo-status.enum";
import { v4 as uuidv4 } from 'uuid';

export class Todo {
    constructor(
    private id: string = uuidv4(),
    private name: string = '',
    private description: string ='',
    private status: TodoStatus = TodoStatus.waiting,
    private creation_date: Date = new Date()
    ){
        this.id=id;
        this.name=name;
        this.description =description;
        this.status=status;
        this.creation_date = creation_date;
    }

    getId():string{
        return this.id;
    }
    setStatus(status:string) {
        if(status == "En Cours")
            this.status = TodoStatus.active;
        if(status == "En Attente")
            this.status = TodoStatus.waiting;
        if(status == "Finalisé")
            this.status = TodoStatus.done;
    }
    setDescription(desc:string) {
        this.description = desc;
    }
    setName(name: string) {
        this.name = name;
    }
}