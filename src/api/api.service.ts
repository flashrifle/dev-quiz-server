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

  getTestApi() {
    const result = {
      content: {
        문제1: {
          질문: '다음 중 Python에서 사용되는 가상환경을 관리하는 도구는 무엇인가?',
          보기: {
            '1': 'pipenv',
            '2': 'npm',
            '3': 'conda',
            '4': 'virtualenv',
          },
          정답: '1',
        },
        문제2: {
          질문: 'Python에서 사용되는 가비지 컬렉션을 수행하는 알고리즘은 무엇인가?',
          보기: {
            '1': 'Reference Counting',
            '2': 'Mark and Sweep',
            '3': 'Generational',
            '4': 'Copy-Collect',
          },
          정답: '3',
        },
      },
    };

    for (const [key, value] of Object.entries(result.content)) {
      console.log(`${key}. ${value.질문}`);

      // 보기 출력
      for (const [index, option] of Object.entries(value.보기)) {
        console.log(`${index}. ${option}`);
      }

      // 정답 출력
      console.log(`\n정답: ${value.정답}\n`);
    }
    // console.log(result.content);
    return result;
  }
}
