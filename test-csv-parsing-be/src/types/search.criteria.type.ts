import { IsArray, ArrayNotEmpty } from 'class-validator';

export class SearchCriteria {
  @IsArray()
  @ArrayNotEmpty()
  countries: string[];

  @IsArray()
  @ArrayNotEmpty()
  devices: string[];
}
