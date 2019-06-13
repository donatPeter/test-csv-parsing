import Testers from './testers';
import FileReader from '../FileReader/file.reader';
import { ITester } from '../../types/tester.type';

describe('Testers', () => {
  const mockedValue: ITester[] = [
    {
      testerId: '1',
      firstName: 'fn1',
      lastName: 'ln1',
      country: 'c1',
      lastLogin: 'll1',
    },
    {
      testerId: '2',
      firstName: 'fn2',
      lastName: 'ln2',
      country: 'c2',
      lastLogin: 'll2',
    },
  ];

  it('should return with the country options', async () => {
    const mockReadFn = jest.fn().mockResolvedValue(mockedValue);
    FileReader.read = mockReadFn;
    expect(await Testers.getTesterCountries()).toEqual(['ALL', 'c1', 'c2']);
  });

  it('should return with the testers for given countries', async () => {
    const mockReadFn = jest.fn().mockResolvedValue(mockedValue);
    FileReader.read = mockReadFn;
    expect(await Testers.getTesters(['c1'])).toEqual([
      {
        testerId: '1',
        firstName: 'fn1',
        lastName: 'ln1',
        country: 'c1',
        lastLogin: 'll1',
      },
    ]);
  });

  it('should return with all the testers for ALL', async () => {
    const mockReadFn = jest.fn().mockResolvedValue(mockedValue);
    FileReader.read = mockReadFn;
    expect(await Testers.getTesters(['ALL'])).toEqual(mockedValue);
  });
});
