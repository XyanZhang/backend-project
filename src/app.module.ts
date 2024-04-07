import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './modules/file/index.module';
import { ImageModule } from './modules/image/image.module';

@Module({
  imports: [ImageModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
