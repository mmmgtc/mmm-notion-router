import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDefault(@Res() response: Response): void {
    const { home } = this.appService.getExternalRoutes();
    return response.redirect(home);
  }

  @Get('/home')
  getHome(@Res() response: Response): void {
    const { home } = this.appService.getExternalRoutes();
    return response.redirect(home);
  }

  @Get('/memepalooza')
  getMemepalooza(@Res() response: Response): void {
    const { memepalooza } = this.appService.getExternalRoutes();
    return response.redirect(memepalooza);
  }

  @Get('/join')
  getJoin(@Res() response: Response): void {
    const { join } = this.appService.getExternalRoutes();
    return response.redirect(join);
  }

  @Get('/weekly')
  getWeekly(@Res() response: Response): void {
    const { weekly } = this.appService.getExternalRoutes();
    return response.redirect(weekly);
  }

  @Get('/request')
  getTypeformRequest(@Res() response: Response): void {
    const { request } = this.appService.getExternalRoutes();
    return response.redirect(request);
  }
}
