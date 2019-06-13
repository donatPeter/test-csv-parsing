import * as csv from 'csvtojson/v2';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export default class FileReader {
  public static async read(path: string): Promise<any[]> {
    try {
      const json = await csv().fromFile(__dirname + path);
      return json;
    } catch (error) {
      throw new HttpException('CSV read error', HttpStatus.NOT_FOUND);
    }
  }
}
