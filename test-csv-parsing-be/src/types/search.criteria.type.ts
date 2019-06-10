import { IsNotEmpty, IsString, IsDefined } from 'class-validator';

export class SearchCriteria {
  @IsNotEmpty()
  @IsDefined()
  @IsString({ each: true })
  country: string[];

  @IsNotEmpty()
  @IsDefined()
  @IsString({ each: true })
  device: string[];
}
