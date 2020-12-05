import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ErrorMessage } from "../enums/error-messages.enum";


export class AddTodoDTO{
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
    

    @IsString({
        message: ErrorMessage.isString
    })
    @MinLength(10, {
        message: ErrorMessage.minLength
    })
    @IsNotEmpty({
        message: ErrorMessage.notEmpty
    })
    description : string   
}