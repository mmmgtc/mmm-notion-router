import { Injectable } from '@nestjs/common';
import { routes } from './routes';

@Injectable()
export class AppService {
  getExternalRoutes() {
    return routes;
  }
}
