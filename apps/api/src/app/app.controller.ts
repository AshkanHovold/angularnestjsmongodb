import { Controller, Get } from '@nestjs/common';

import { Message } from '@myworkspace/api-interfaces';

import { AppService } from './app.service';
import { CatsService } from './schemas/cat/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private catService: CatsService
  ) {}

  @Get('hello')
  getData(): Message {
    this.catService.create({ age: 12, breed: 'hmm', name: 'ashkan' });
    return this.appService.getData();
  }
}
