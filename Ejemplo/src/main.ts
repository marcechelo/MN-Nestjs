import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
