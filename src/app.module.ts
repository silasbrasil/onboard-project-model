import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SilasBrasilController } from './silas-brasil/silas-brasil.controller';

@Module({
  imports: [],
  controllers: [AppController, SilasBrasilController],
  providers: [AppService],
})
export class AppModule {}
