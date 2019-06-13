import { Test, TestingModule } from '@nestjs/testing';

import { SearchService } from './search.service';
import Testers from '../classes/Testers/testers';
import Devices from '../classes/Devices/devices';
import Bugs from '../classes/Bugs/bugs';
import { ITester } from '../types/tester.type';
import { IDevice } from '../types/device.type';

describe('SearchService', () => {
  let searchService: SearchService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [SearchService],
    }).compile();

    searchService = app.get<SearchService>(SearchService);
  });

  describe('getCountryOptions', () => {
    it('should return with the country options', async () => {
      const mockReadFn = jest.fn().mockResolvedValue(['ALL', 'XX']);
      Testers.getTesterCountries = mockReadFn;
      expect(await searchService.getCountryOptions()).toEqual(['ALL', 'XX']);
    });
  });

  describe('getDeviceOptions', () => {
    it('should return with the device options', async () => {
      const mockReadFn = jest.fn().mockResolvedValue(['ALL', 'XX']);
      Devices.getDeviceDescriptions = mockReadFn;
      expect(await searchService.getDeviceOptions()).toEqual(['ALL', 'XX']);
    });
  });

  describe('getResult', () => {
    it('should return with the results', async () => {
      Testers.getTesters = jest.fn().mockResolvedValue([
        {
          testerId: '1',
          firstName: 'fn1',
          lastName: 'ln1',
          country: 'c1',
          lastLogin: 'll1',
        },
      ] as ITester[]);
      Devices.getDevicesByDescription = jest.fn().mockResolvedValue([
        {
          deviceId: 'id1',
          description: 'd1',
        },
      ] as IDevice[]);
      Bugs.getBugNumbers = jest.fn().mockResolvedValue(1);
      expect(
        await searchService.getResult({ countries: [], devices: [] }),
      ).toEqual([
        {
          experience: 1,
          firstName: 'fn1',
          lastName: 'ln1',
        },
      ]);
    });
  });
});
