import FileReader from '../FileReader/file.reader';
import { bugsPath } from '../../config/constant';

import { IBug } from '../../types/bug.type';
import { ITester } from '../../types/tester.type';
import { IDevice } from '../../types/device.type';

export default class Bugs {
  public static async getBugNumbers(
    tester: ITester,
    devices: IDevice[],
  ): Promise<number> {
    const bugs: IBug[] = await FileReader.read(bugsPath);
    if (bugs instanceof Array) {
      return bugs
        .filter(({ testerId: tId }) => tester.testerId === tId)
        .filter(({ deviceId }) =>
          devices.map(({ deviceId }) => deviceId).includes(deviceId),
        ).length;
    }
  }
}
