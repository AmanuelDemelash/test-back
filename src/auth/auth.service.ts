import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInAuthDto } from './dto/update-auth.dto';
import { SignUpAuthDto } from './dto/create-auth.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { log } from 'console';
import { UtilService } from 'src/util/util.service';


@Injectable()
export class AuthService {
  constructor(private userServeice:UserService,private utilService:UtilService){}

  async signIn(signInAuthDto: SignInAuthDto):Promise<any> {
    //cheek the user
    const user=await this.userServeice.findOneByEmail(signInAuthDto.email);
    console.log(user);
    if(!user)throw new UnauthorizedException();
      
     const isPassMatch =await this.utilService.comparePassword(signInAuthDto.password.toString(),user.password.toString());
     console.log(isPassMatch);
    if(!isPassMatch) throw new BadRequestException("password dosnt match");

     return user;
       
  }

  async signUp(signUpAuthDto: SignUpAuthDto):Promise<User>{
    //cheek user
    const user=await this.userServeice.findOneByEmail(signUpAuthDto.email);
    if(user){
      throw new BadRequestException("user found with this email");
    }else{
     return this.userServeice.create(signUpAuthDto);
    }
  }

  
}
