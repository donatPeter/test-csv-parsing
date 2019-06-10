import { Injectable } from '@nestjs/common';

import FileReader from './file.reader';
import { ITester } from '../types/tester.type';
import { testersPath } from '../config/constant';

@Injectable()
export default class Testers {
  public static async getTesters(countries: string[]): Promise<ITester[]> {
    const testers: ITester[] = await FileReader.read(testersPath);
    if (countries.includes('ALL')) {
      return testers;
    }
    return testers.filter(({ country }) => countries.includes(country));
  }
}
