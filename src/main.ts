import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from "./app.module";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger-output.json';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  await app.listen(3000);
}
bootstrap();
