import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Swagger Configuration
   const config = new DocumentBuilder()
   .setTitle('Smart Task Meneger API')
   .setDescription('API documentation for Smart Task Meneger')
   .setVersion('1.0')
   .addBearerAuth() // if use authorization (optional)
   .build();
 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api-docs', app, document);
  
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
