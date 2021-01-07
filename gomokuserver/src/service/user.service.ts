import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entity/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
  //使用 @InjectRepository()装饰器将 UsersRepository 注入到 UsersService
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  findOne(name:string,password:string): Promise<User[]> {
      return this.userRepository
          .createQueryBuilder("user")
          .where("user.name = :name AND user.password = :password", { name: name, password: password })
          .getMany();
  }

  testCrossDomain(): string {
      return 'test cross domain!';
  }
}
