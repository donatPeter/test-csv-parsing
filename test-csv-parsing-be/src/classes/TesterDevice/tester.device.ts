import { Injectable } from '@nestjs/common';

import FileReader from '../FileReader/file.reader';
import { ITesterDevice } from '../../types/tester.device.type';
import { testerDevicePath } from '../../config/constant';

/**
 * The tester_device.csv in not necessary in getting the search result hence not used
 * TODO: could be used maybe to check if a given tester-device pair exists in case of a big bugs.csv as optimization
 */
@Injectable()
export default class TestersDevice {
  public static async checkIfExists(
    testerId: string,
    deviceId: string,
  ): Promise<boolean> {
    const pairs: ITesterDevice[] = await FileReader.read(testerDevicePath);
    return !!pairs.find(
      pair => pair.deviceId === deviceId && pair.testerId === testerId,
    );
  }
}
