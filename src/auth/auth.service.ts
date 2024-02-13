import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInAuthDto } from './dto/update-auth.dto';
import { SignUpAuthDto } from './dto/create-auth.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { log } from 'console';
import { UtilService } from 'src/util/util.service';


@Injectable()
export class AuthService {
  constructor(private userServeice:UserService,private utilService:UtilService){}

  async signIn(signInAuthDto: SignInAuthDto):Promise<User> {
    //cheek the user
    const user=await this.userServeice.findOneByEmail(signInAuthDto.email);
    console.log(user);
    if(user){  
      throw new HttpException("user not found with this email",HttpStatus.UNAUTHORIZED);

    }else{
      const isPassMatch =await this.utilService.comparePassword(signInAuthDto.password.toString(),user.password.toString());
      if(isPassMatch){
        console.log(user);
              return user;
      }
      else{
        throw new HttpException("user not found with this email",HttpStatus.UNAUTHORIZED);

      }    }
  }

  async signUp(signUpAuthDto: SignUpAuthDto):Promise<User>{
    //cheek user
    const user=await this.userServeice.findOneByEmail(signUpAuthDto.email);
    if(user){
      throw new HttpException("user found with this email",HttpStatus.UNAUTHORIZED);
    }else{
     return this.userServeice.create(signUpAuthDto);
    }
  }

  
}
