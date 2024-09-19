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

  @Post('/examCreate')
  @UsePipes(new ValidationPipe())
  getApi(@Body() createExamDto: CreateExamDto) {
    console.log(createExamDto);
    return this.apiService.generateAi(createExamDto);
  }
}
