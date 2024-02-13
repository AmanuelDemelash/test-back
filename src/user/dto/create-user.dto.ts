import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    fullName:String

    @IsNotEmpty()
    @IsEmail()
    email:String

    @IsNotEmpty()
    password:String
}
