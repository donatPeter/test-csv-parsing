import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('SearchController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/testerCountries', () => {
    it('should return with the country list', () => {
      return request(app.getHttpServer())
        .get('/testerCountries')
        .expect(200)
        .expect(["US", "GB", "JP"]);
    });
  });

  describe('/devices', () => {
    it('it should return with the device list', () => {
      return request(app.getHttpServer())
        .get('/devices')
        .expect(200)
        .expect(["ALL", "iPhone 4", "iPhone 4S", "iPhone 5", "Galaxy S3", "Galaxy S4", "Nexus 4", "Droid Razor", "Droid DNA", "HTC One", "iPhone 3"]);
    });
  });

  describe('/search', () => {
    it('should return with 400 in case of invalid post request', () => {
      return request(app.getHttpServer())
      .post('/search')
      .set('Content-Type', 'application/json')
      .expect(400)
    });

    it('should return with the proper search results', () => {
      return request(app.getHttpServer())
        .post('/search')
        .send({
          countries: ['JP'],
          devices: ['ALL']
        })
        .set('Content-Type', 'application/json')
        .expect(201)
        .expect([
          { "firstName": "Lucas", "lastName": "Lowry", "experience": 117 },
          { "firstName": "Sean", "lastName": "Wellington", "experience": 116 },
          { "firstName": "Mingquan", "lastName": "Zheng", "experience": 109 }
        ]);
    });
  });
});
