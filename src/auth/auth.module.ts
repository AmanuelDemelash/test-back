import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { UtilModule } from 'src/util/util.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[UserModule,UtilModule]
})
export class AuthModule {}
