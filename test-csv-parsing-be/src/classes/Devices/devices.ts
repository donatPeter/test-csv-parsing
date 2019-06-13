import FileReader from '../FileReader/file.reader';
import { IDevice } from '../../types/device.type';
import { devicesPath } from '../../config/constant';

export default class Devices {
  public static async getDevicesByDescription(
    descriptions: string[],
  ): Promise<IDevice[]> {
    const devices: IDevice[] = await FileReader.read(devicesPath);
    if (descriptions.includes('ALL')) {
      return devices;
    }
    return devices.filter(({ description }) =>
      descriptions.includes(description),
    );
  }

  public static async getDeviceDescriptions(): Promise<string[]> {
    const devices: IDevice[] = await FileReader.read(devicesPath);
    const deviceDescriptions = Array.from(
      new Set(devices.map(({ description }) => description)),
    );
    deviceDescriptions.unshift('ALL');
    return deviceDescriptions;
  }
}
