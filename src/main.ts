import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';
import { routes } from './routes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req: Request, res: Response, next: NextFunction) => {
    const [, pathname] = req.path.split('/');
    if (!Object.keys(routes).includes(pathname)) {
      return res.redirect(routes.home);
    }
    next();
  });
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
