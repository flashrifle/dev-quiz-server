import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateExamDto } from './dto/create-exam.dto';
import { createExam } from '../common/util/OpenAI';

@Injectable()
export class ApiService {
  constructor(private readonly configService: ConfigService) {}

  async generateAi(dto: CreateExamDto) {
    const result = createExam(dto);
    return result;
  }

  getQueryTest(dto: CreateExamDto) {
    const result = {
      ...dto,
    };
    console.log(result);
    return result;
  }
}
