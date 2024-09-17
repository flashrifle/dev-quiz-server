import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ApiController],
  providers: [ApiService, ConfigService],
})
export class ApiModule {}
