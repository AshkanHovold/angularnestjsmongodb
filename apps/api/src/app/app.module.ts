import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './schemas/cat/cats.module';
import { CatsService } from './schemas/cat/cats.service';
import { CatsController } from './schemas/cat/cats.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:32017/nest'),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
