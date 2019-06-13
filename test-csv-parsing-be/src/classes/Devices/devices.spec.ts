import Devices from './devices';
import FileReader from '../FileReader/file.reader';
import { IDevice } from '../../types/device.type';

describe('Testers', () => {
  const mockedValue: IDevice[] = [
    {
      deviceId: 'id1',
      description: 'd1',
    },
    {
      deviceId: 'id2',
      description: 'd2',
    },
  ];

  it('should return with the device options', async () => {
    const mockReadFn = jest.fn().mockResolvedValue(mockedValue);
    FileReader.read = mockReadFn;
    expect(await Devices.getDeviceDescriptions()).toEqual(['ALL', 'd1', 'd2']);
  });

  it('should return with the devices for given description', async () => {
    const mockReadFn = jest.fn().mockResolvedValue(mockedValue);
    FileReader.read = mockReadFn;
    expect(await Devices.getDevicesByDescription(['d1'])).toEqual([
      {
        deviceId: 'id1',
        description: 'd1',
      },
    ]);
  });

  it('should return with all the devices for ALL', async () => {
    const mockReadFn = jest.fn().mockResolvedValue(mockedValue);
    FileReader.read = mockReadFn;
    expect(await Devices.getDevicesByDescription(['ALL'])).toEqual(mockedValue);
  });
});
