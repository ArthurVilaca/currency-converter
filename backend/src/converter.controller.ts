import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ConvertDto } from './dto';

@Controller('convert')
export class ConvertController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async convert(@Body() data: ConvertDto) {
    return await this.appService.convert(data.amount, data.from, data.to)
  }
}
