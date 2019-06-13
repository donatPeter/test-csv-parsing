import { Injectable } from '@nestjs/common';

import Devices from '../classes/Devices/devices';
import Testers from '../classes/Testers/testers';
import Bugs from '../classes/Bugs/bugs';

import { SearchCriteria } from '../types/search.criteria.type';
import { ISearchResult } from '../types/search.result.type';

@Injectable()
export class SearchService {
  public async getCountryOptions(): Promise<string[]> {
    return Testers.getTesterCountries();
  }

  public async getDeviceOptions(): Promise<string[]> {
    return Devices.getDeviceDescriptions();
  }

  public async getResult(
    searchCriteria: SearchCriteria,
  ): Promise<ISearchResult[]> {
    const testers = await Testers.getTesters(searchCriteria.countries);
    const devices = await Devices.getDevicesByDescription(
      searchCriteria.devices,
    );

    const result: ISearchResult[] = [];
    for (const tester of testers) {
      const experience = await Bugs.getBugNumbers(tester, devices);
      result.push({
        firstName: tester.firstName,
        lastName: tester.lastName,
        experience,
      });
    }

    return result.sort((a, b) => b.experience - a.experience);
  }
}
