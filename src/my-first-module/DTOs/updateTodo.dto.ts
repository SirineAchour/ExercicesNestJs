import { Type } from "class-transformer";
import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ErrorMessage } from "../enums/error-messages.enum";
import { TodoStatus } from "../enums/todo-status.enum";

export class UpdateTodoDTO{
    @IsString({
        message: ErrorMessage.isString
    })
    @IsNotEmpty({
        message: ErrorMessage.notEmpty
    })
    id: string;
    
    @Type(() => String)
    @IsOptional()
    @IsString({
        message: ErrorMessage.isString
    })
    @IsNotEmpty({
        message: ErrorMessage.notEmpty
    })
    @MinLength(3, {
        message : ErrorMessage.minLength
    })
    @MaxLength(10,{
        message : ErrorMessage.maxLength
    })
    name: string;
    
    @Type(() => String)
    @IsOptional()
    @IsString({
        message: ErrorMessage.isString
    })
    @MinLength(10, {
        message: ErrorMessage.minLength
    })
    @IsNotEmpty({
        message: ErrorMessage.notEmpty
    })
    description : string;

    @IsIn(['En Cours','En Attente','Finalisé'],
    {
        message: ErrorMessage.isIn
    })
    @IsOptional()
    status : TodoStatus;

}