import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer'; // 新增代码

@Injectable()
export class FileService {
    getImageUrl(file: string): string {
        return `/file/${file}`;
    }
    getHello() {
        return 'Hello World!'
    }
    uploadFile(file: any) {
        // 写入文件


        return file;
    }
    create(file:any) {

    }
}