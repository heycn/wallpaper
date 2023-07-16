import { Controller, Get, Res } from '@nestjs/common';
// import { AppService } from './app.service';
import { resolve } from 'path';
import { random } from 'lodash';
import { readdir } from 'fs/promises';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) { }

  @Get()
  async getImage() {
    const files = await readdir(resolve(__dirname, '../wallpaper'))
    const images = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'))
    const imageName = images[random(images.length - 1)]
    const imageUrl = 'http://localhost:3000/wallpaper/' + imageName
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(imageUrl)
      }, 500)
    })
  }
}
