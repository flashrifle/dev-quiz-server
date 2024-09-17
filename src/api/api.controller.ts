import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { ConfigService } from '@nestjs/config';
import { ENV_TEST } from '../common/const/env-config.const';

@Controller('api')
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private configService: ConfigService,
  ) {}

  @Get('/test')
  getApi() {
    const test = this.configService.get<string>(ENV_TEST);
    console.log(test);
  }
}
