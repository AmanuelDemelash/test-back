import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UtilService } from 'src/util/util.service';
import { promises } from 'dns';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>,private utileService:UtilService){}

 async create(createUserDto: CreateUserDto):Promise<User>{   
    try {
          const userData=createUserDto;
          userData.password=await this.utileService.hashPassword(userData.password.toString());
          return this.userRepository.save(userData);

    } catch (error) {
     throw new HttpException(error,HttpStatus.UNPROCESSABLE_ENTITY)
      
    }
  }

  async findAll() {
    try {
      return  await this.userRepository.find();
    } catch (error) {
      throw new HttpException(error,HttpStatus.NOT_ACCEPTABLE)
      
    }
  }

  findOne(id: number) {
    try { 
      return this.userRepository.findOneBy({id:id});
    } catch (error) {
      
    }
    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userRepository.delete({id:id});
  }

 async findOneByEmail(email:String):Promise<User>{
     return await this.userRepository.findOneBy({email:email});
  }
}
