import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from "./app.module";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger-output.json';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Documentação da API usando Swagger')
    .setVersion('1.0')
    .addTag('users') // Adicione tags para organizar suas rotas
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000/api-docs');
}
bootstrap();
