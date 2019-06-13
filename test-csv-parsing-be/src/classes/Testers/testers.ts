import FileReader from '../FileReader/file.reader';
import { ITester } from '../../types/tester.type';
import { testersPath } from '../../config/constant';

export default class Testers {
  public static async getTesters(countries: string[]): Promise<ITester[]> {
    const testers: ITester[] = await FileReader.read(testersPath);
    if (countries.includes('ALL')) {
      return testers;
    }
    return testers.filter(({ country }) => countries.includes(country));
  }

  public static async getTesterCountries(): Promise<string[]> {
    const testers: ITester[] = await FileReader.read(testersPath);
    const countries = Array.from(
      new Set(testers.map(({ country }) => country)),
    );
    countries.unshift('ALL');
    return countries;
  }
}
