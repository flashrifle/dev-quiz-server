import { IsIn, IsNumber, IsString } from 'class-validator';

export class CreateExamDto {
  @IsIn(['javascript', 'mysql'])
  @IsString()
  lang: string;

  @IsIn(['고급', '중급', '초급'])
  @IsString()
  difficulty: string;

  @IsNumber()
  count: number;
}
