import { Injectable } from '@nestjs/common';

import Devices from '../classes/devices';
import Testers from '../classes/testers';
import Bugs from '../classes/bugs';

import { SearchCriteria } from '../types/search.criteria.type';
import { ISearchResult } from '../types/search.result.type';

@Injectable()
export class AppService {
  async get(searchCriteria: SearchCriteria): Promise<any> {
    const testers = await Testers.getTesters(searchCriteria.country);
    const devices = await Devices.getDevice(searchCriteria.device);

    const res: ISearchResult[] = [];
    for (const tester of testers) {
      const c = await Bugs.get(tester, devices)
      res.push({
        firstName: tester.firstName,
        lastName: tester.lastName,
        experience: c,
      });
    }

    return res.sort((a, b) => b.experience - a.experience);
  }
}