import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpAuthDto } from './dto/create-auth.dto';
import { SignInAuthDto } from './dto/update-auth.dto';
import { User } from 'src/user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body(new ValidationPipe()) signUpAuthDto: SignUpAuthDto):Promise<User>{
    return this.authService.signUp(signUpAuthDto);
  }

  @Post('signin')
  signIn(@Body() signInAuthDto: SignInAuthDto) {
    return this.authService.signIn(signInAuthDto);
  }

}
