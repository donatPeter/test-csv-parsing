import { Injectable } from '@nestjs/common';

import FileReader from './file.reader';
import { IDevice } from '../types/device.type';
import { devicesPath } from '../config/constant';

@Injectable()
export default class Devices {
  public static async getDevice(descriptions: string[]): Promise<IDevice[]> {
    const devices: IDevice[] = await FileReader.read(devicesPath);
    if (descriptions.includes('ALL')) {
      return devices;
    }
    return devices.filter(({ description }) => descriptions.includes(description));
  }
}
