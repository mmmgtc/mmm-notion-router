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
  
  @Get('/weekly/design')
  getWeeklyDesign(@Res() response: Response): void {
    const { weeklyDesign } = this.appService.getExternalRoutes();
    return response.redirect(weeklyDesign);
  }
  @Get('/weekly/sync')
  getWeeklySync(@Res() response: Response): void {
    const { weeklySync } = this.appService.getExternalRoutes();
    return response.redirect(weeklySync);
  }
  @Get('/weekly/officehours')
  getWeeklyOfficeHours(@Res() response: Response): void {
    const { officeHours } = this.appService.getExternalRoutes();
    return response.redirect(officeHours);
  }

  @Get('/design')
  getDesign(@Res() response: Response): void {
    const { design } = this.appService.getExternalRoutes();
    return response.redirect(design);
  }

  @Get('/dev')
  getDev(@Res() response: Response): void {
    const { dev } = this.appService.getExternalRoutes();
    return response.redirect(dev);
  }

  @Get('/raids')
  getRaids(@Res() response: Response): void {
    const { raids } = this.appService.getExternalRoutes();
    return response.redirect(raids);
  }

  @Get('/figma')
  getFigma(@Res() response: Response): void {
    const { figma } = this.appService.getExternalRoutes();
    return response.redirect(figma);
  }

}
