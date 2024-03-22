import { Controller, Get } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller()
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  getHello(): string {
    return this.imageService.getImageUrl('');
  }
}
