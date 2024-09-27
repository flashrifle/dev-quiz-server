import { OPENAI_API_KEY } from '../const/env-config.const';
import { OpenAI } from 'openai';
import { CreateExamDto } from '../../api/dto/create-exam.dto';
import { InternalServerErrorException } from '@nestjs/common';

const examSample = {
  questionNumber: {
    question: '문제질문',
    choices: [1, 2, 3, 4],
    answer: '정답',
  },
};

export const createExam = async (dto: CreateExamDto) => {
  const openai = new OpenAI({
    apiKey: process.env[OPENAI_API_KEY],
  });
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: [
            {
              type: 'text',
              text: `${examSample} 형식의 프로그래밍 언어 문제를 생성하는 것 입니다 문제 형식 객체구조를 바꿀 수 없고 형식을 무조껀 지켜야합니다.`,
            },
          ],
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `언어 : ${dto.lang} 난이도 : ${dto.difficulty} 4지선다로 문제 ${dto.count}개를 만들거야 답안 앞에 숫자를 붙혀줘 json 형식으로`,
            },
          ],
        },
      ],
      temperature: 0,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      response_format: {
        type: 'json_object',
      },
    });
    console.log('response : ', response.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (err) {
    throw new InternalServerErrorException(err.message);
  }
};
