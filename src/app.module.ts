import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { TestmidMiddleware } from './middleware/testmid/testmid.middleware';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { UtilModule } from './util/util.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test1',
      database: 'testDb',
      entities: [User],
      synchronize: true,
      autoLoadEntities:true
    }),
    AuthModule,
    UserModule,
    UtilModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule{
  
  
}
