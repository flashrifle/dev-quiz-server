import { IsIn, IsNumber, IsString } from 'class-validator';

export class CreateExamDto {
  @IsIn([
    'Java',
    'JavaScript',
    'Python',
    'C',
    'C#',
    'C++',
    'SQL',
    'MySQL',
    'MS-SQL',
    'PostgreSQL',
    'Power BI',
  ])
  @IsString()
  lang: string;

  @IsIn(['고급', '중급', '초급'])
  @IsString()
  difficulty: string;

  @IsNumber()
  count: number;
}
