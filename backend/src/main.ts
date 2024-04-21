import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as logger from "morgan"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(passport.initialize());
  app.use(logger('dev'));
  app.use(helmet())
  app.enableCors()
  await app.listen(8080);
  
}
bootstrap();
