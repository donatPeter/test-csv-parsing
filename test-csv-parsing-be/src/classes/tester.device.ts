import { Injectable } from '@nestjs/common';

import FileReader from './file.reader';
import { ITesterDevice } from '../types/tester.device.type';
import { testerDevicePath } from '../config/constant';

@Injectable()
export default class Testers {
  public static async get(testerId: string, deviceId: string): Promise<ITesterDevice[]> {
    const pairs: ITesterDevice[] = await FileReader.read(testerDevicePath);
    return pairs;
  }
}
