import { Injectable } from '@nestjs/common';

import FileReader from './file.reader';
import { bugsPath } from '../config/constant';

import { IBug } from '../types/bug.type';
import { ITester } from '../types/tester.type';
import { IDevice } from '../types/device.type';

@Injectable()
export default class Bugs {
  public static async get(tester: ITester, devices: IDevice[]): Promise<any> {
    const bugs: IBug[] = await FileReader.read(bugsPath);
    return bugs
      .filter(({ testerId: tId }) => tester.testerId === tId)
      .filter(({ deviceId }) => devices.filter(x => x.deviceId === deviceId))
      .length;
  }
}
