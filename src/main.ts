import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';

const port = process.env['LOCAL_PORT'];
const devStatus = process.env['DEV_STATUS'];
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (devStatus === 'prod') {
    app.enableCors({
      origin: [process.env['PRODUCT_HOST']],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      exposedHeaders: ['Authorization'],
    });
  } else {
    // cors 설정
    app.enableCors({
      origin: [process.env['DEV_HOST']],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      exposedHeaders: ['Authorization'], // * 사용할 헤더 추가.
    });
  }

  await app.listen(port);
  console.log('server listen port :', port);
}
bootstrap();
