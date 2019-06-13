import {
  Controller,
  Post,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { SearchService } from '../services/search.service';
import { SearchCriteria } from '../types/search.criteria.type';
import { ISearchResult } from '../types/search.result.type';

@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/testerCountries')
  getCountryOptions(): Promise<string[]> {
    return this.searchService.getCountryOptions();
  }

  @Get('/devices')
  getDeviceOptions(): Promise<string[]> {
    return this.searchService.getDeviceOptions();
  }

  @Post('/search')
  @UsePipes(
    new ValidationPipe({
      disableErrorMessages: false,
      forbidUnknownValues: true,
      skipMissingProperties: false,
      transform: true,
      validationError: { target: false, value: false },
    }),
  )
  getResult(@Body() searchCriteria: SearchCriteria): Promise<ISearchResult[]> {
    return this.searchService.getResult(searchCriteria);
  }
}
