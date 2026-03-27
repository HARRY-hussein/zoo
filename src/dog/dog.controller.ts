import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import type { Request } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id') // greet/:id/:itemId
  public introduce(@Param() params: any, @Query() query: any): string {
    console.log('params:', params);
    console.log('query:', query);
    return this.dogService.introduce();
  }
}

/* public introduce(@Req() request: Request, @Res() response: Response) {
    console.log('params:', request.params);
    console.log('query:', request.query);
    const result = this.dogService.introduce();
    response.status(200).send(result);
  } */
