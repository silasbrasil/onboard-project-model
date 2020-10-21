import { Injectable } from '@nestjs/common';
import { HelloWorldDto } from './dto';

@Injectable()
export class AppService {
  getHello(): HelloWorldDto {
    return {
      message: 'Bem-vindo ao onboard dos Dev para Backend',
      status: 'starting'
    };
  }
}
