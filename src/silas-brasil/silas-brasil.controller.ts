import { Controller, Get } from '@nestjs/common';

@Controller('silas-brasil')
export class SilasBrasilController {

  @Get()
  developer(): string {
    return 'Silas Brasil';
  }
}
