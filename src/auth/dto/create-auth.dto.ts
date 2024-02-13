import { IsEmail, IsNotEmpty } from "class-validator"

export class SignUpAuthDto {

    @IsNotEmpty()
    fullName:String

    @IsNotEmpty()
    @IsEmail()
    email:String
    
    @IsNotEmpty()
    password:String

}
