import {Length, IsStrongPassword, MinLength} from "class-validator";

export class CreateUserDto {

    @Length(3,64)
    username:string;

    @Length(3,64)
    //@IsStrongPassword()
    password:string;
}
