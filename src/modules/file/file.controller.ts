import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileService } from "./file.service";
import { diskStorage } from 'multer'; // 新增代码

@Controller()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('file')
  getHello(): string {
    return this.fileService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
     // 新增代码
     storage: diskStorage({
      destination: 'uploads/', // 设置文件保存位置为根目录下的 uploads 文件夹
      filename: (_req, file, cb) => {
        // 生成一个随机字符串
        const randomName = Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');
        // 设置文件名
        return cb(null, `${randomName}${file.originalname}`);
      }
    })
  }))
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