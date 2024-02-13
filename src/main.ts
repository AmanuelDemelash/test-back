import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{abortOnError:false});
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
