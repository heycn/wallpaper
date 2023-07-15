import { Controller, Get, Res } from '@nestjs/common';
// import { AppService } from './app.service';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { random } from 'lodash';
import { Response } from 'express';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) { }

  @Get()
  getImage(@Res() res: Response) {
    const files = readdirSync(resolve(__dirname, '../wallpaper'))
    const images = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'))
    const imageName = images[random(images.length - 1)]
    const file = readFileSync(resolve(__dirname, '../wallpaper', imageName))
    res.type('image/jpeg')
    return res.send(file)
  }
}
