import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer'; // 新增代码

@Injectable()
export class FileService {
    create(file:any) {
        return {
            state: 1,
        }
    }
}