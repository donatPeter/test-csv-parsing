import { HttpException } from '@nestjs/common';

import FileReader from './file.reader';

describe('FileReader', () => {
  it('should throw a HttpException in case of error', async () => {
    const mockReadFn = jest.fn().mockImplementation(() => new Error(''));
    FileReader.read = mockReadFn;
    try {
      await FileReader.read('');
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException);
    }
  });
});
