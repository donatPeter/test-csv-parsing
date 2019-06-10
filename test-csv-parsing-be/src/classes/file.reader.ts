import * as csv from 'csvtojson/v2';

export default class FileReader {
  public static async read(path: string): Promise<any[]> {
    try {
      const json = await csv().fromFile(__dirname + path);
      return json;
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }
}
