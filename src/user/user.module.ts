import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UtilModule } from 'src/util/util.module';

@Module({
  imports:[TypeOrmModule.forFeature([User]),UtilModule],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]

})
export class UserModule {}
