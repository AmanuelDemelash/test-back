import { PartialType } from '@nestjs/mapped-types';
import { SignUpAuthDto } from './create-auth.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInAuthDto extends PartialType(SignUpAuthDto) {

    @IsNotEmpty()
    @IsEmail()
    email:String
    
    @IsNotEmpty()
    password:String
}
