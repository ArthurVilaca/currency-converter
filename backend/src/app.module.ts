import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ConvertController } from './converter.controller'
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [AppController, ConvertController],
  providers: [AppService],
})
export class AppModule {}
