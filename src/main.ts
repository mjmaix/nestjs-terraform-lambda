import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'aws-lambda';
import helmet from 'helmet';
import { env } from 'process';

import * as pkg from '../package.json';
import { AppModule } from './app.module';

function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle(pkg.name)
    .setDescription(pkg.description)
    .setVersion(pkg.version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}

export async function bootstrap(): Promise<Handler> {
  console.time('#perf bootup time');
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  if (env.ENV !== 'prod') {
    setupSwagger(app);
  }

  const port = env.PORT || 3000;
  await app.listen(port);
  console.log(`Now listening on port ${port}`);
  console.timeEnd('#perf bootup time');

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}
