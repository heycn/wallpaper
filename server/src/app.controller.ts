import { Controller, Get, Res } from '@nestjs/common';
// import { AppService } from './app.service';
import { resolve } from 'path';
import { random } from 'lodash';
import { Response } from 'express';
import { readFile, readdir } from 'fs/promises';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) { }

  @Get()
  async getImage(@Res() res: Response) {
    const files = await readdir(resolve(__dirname, '../wallpaper'))
    const images = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'))
    const imageName = images[random(images.length - 1)]
    const file = await readFile(resolve(__dirname, '../wallpaper', imageName))
    res.type('image/jpeg')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res.send(file))
      }, 500)
    })
  }
}
