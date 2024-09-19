import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';

const port = process.env['LOCAL_PORT'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // cors 설정
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    exposedHeaders: ['Authorization'], // * 사용할 헤더 추가.
  });

  await app.listen(port);
  console.log('server listen port :', port);
}
bootstrap();
