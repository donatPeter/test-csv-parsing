import Bugs from './bugs';
import FileReader from '../FileReader/file.reader';
import { IBug } from '../../types/bug.type';
import { ITester } from '../../types/tester.type';
import { IDevice } from '../../types/device.type';

describe('Testers', () => {
  const mockedValue: IBug[] = [
    {
      bugId: 'bId1',
      deviceId: 'dId1',
      testerId: 'tId1',
    },
    {
      bugId: 'b2',
      deviceId: 'dId1',
      testerId: 'tId2',
    },
  ];

  it('should return with the device options', async () => {
    const mockReadFn = jest.fn().mockResolvedValue(mockedValue);
    FileReader.read = mockReadFn;
    const tester: ITester = {
      testerId: 'tId1',
      country: 'c1',
      lastName: 'ln1',
      firstName: 'fn1',
      lastLogin: 'll1',
    };
    const devices: IDevice[] = [
      {
        deviceId: 'dId1',
        description: 'd1',
      },
    ];
    expect(await Bugs.getBugNumbers(tester, devices)).toEqual(1);
  });
});
