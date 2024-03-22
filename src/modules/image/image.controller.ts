import { Controller, Get, Query } from '@nestjs/common';
import { ImageService } from './image.service';
import { join } from 'path';

@Controller()
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get('image')
  getHello(@Query() query): string {
    return this.imageService.getImageUrl('');
  }

  @Get('imageResize')
  getResizeImage(@Query() query) {
    let inputPath = join(__dirname, '..', '..', '..', 'public', 'img', '1.jpg');
    let outputPath = join(__dirname, '..', '..', '..', 'public', 'img', 'test.jpg');
    this.imageService.resizeImage(inputPath, outputPath, 100, 100);
  }
}
