import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entity/user.entity";

@Module({
    //使用 forFeature() 方法定义在当前范围中注册哪些存储库
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
