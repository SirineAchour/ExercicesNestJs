import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
//import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: ['http://localhost:4201', 'http://localhost:4200'], 
    optionsSuccessStatus: 202
  }

  app.use(morgan('dev'))
  app.enableCors(corsOptions)
  //app.use(helmet());
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
  }
  bootstrap();
