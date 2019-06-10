import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { SearchCriteria } from '../types/search.criteria.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  getResult(@Body() searchCriteria: SearchCriteria): Promise<any> {
    return this.appService.get(searchCriteria);
  }
}
