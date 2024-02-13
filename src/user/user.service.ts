import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}

 async create(createUserDto: CreateUserDto) {
    try {
          return this.userRepository.save(createUserDto);

    } catch (error) {
     return  new HttpException(error,HttpStatus.BAD_REQUEST)
      
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
}
