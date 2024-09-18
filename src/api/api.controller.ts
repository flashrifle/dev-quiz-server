import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateExamDto } from './dto/create-exam.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/test')
  @UsePipes(new ValidationPipe())
  getApi(@Body() createExamDto: CreateExamDto) {
    return this.apiService.generateAi(createExamDto);
  }

  @Post('/test2')
  @UsePipes(new ValidationPipe())
  getQueryTest(@Body() createExamDto: CreateExamDto) {
    return this.apiService.getQueryTest(createExamDto);
  }
}
