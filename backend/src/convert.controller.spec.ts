import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ConvertController } from './converter.controller';
import { AppService } from './app.service';

describe('ConvertController', () => {
  let convertController: ConvertController;
  let appService: AppService;
  let httpService: HttpService;

  beforeEach(async () => {
    httpService = new HttpService()
    appService = new AppService(httpService);
    convertController = new ConvertController(appService)
  });

  describe('convert', () => {
    it('should return converted value', async () => {
      const result = new Promise<number>(async (resolve, reject) => { 
        resolve(60)
      });
      jest.spyOn(appService, 'convert').mockImplementation(() => result);

      expect(await convertController.convert({ amount: '30', from: 'BRL', to: 'USD' }))
        .toBe(60);
    });
  });
});
