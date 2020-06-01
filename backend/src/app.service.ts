import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async convert(amount: string, from: string, to: string) {
    const url = `${process.env.API_URL}q=${from}_${to}&compact=ultra&apiKey=${process.env.API_KEY}`;
    const response = await this.http.get(url).toPromise()
    return response['data'][`${from}_${to}`] * parseFloat(amount)
  }
}
