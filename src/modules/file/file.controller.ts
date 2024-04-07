import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileService } from "./file.service";
import { multerConfig } from "@/config/multerConfig";

@Controller()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('file')
  getHello(): string {
    return this.fileService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadFile(@UploadedFile() file:any) {
    console.log(file);
    // 生成文件
    return this.fileService.create(file);
  }
  // @Get('file/upload')
  // uploadFile(): string {
  //   return this.fileService.uploadFile();
  // }
}