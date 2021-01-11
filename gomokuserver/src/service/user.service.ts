import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entity/user.entity";
import {Repository} from "typeorm";
import {encryptPassword, makeSalt} from "../util/cryptogram";

@Injectable()
export class UserService {
  //使用 @InjectRepository()装饰器将 UsersRepository 注入到 UsersService
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async findOne(name:string): Promise<User> {
    try {
      const user = this.userRepository.createQueryBuilder("user").where("user.name = :name", {name: name}).getOne();
      return user;
    } catch (error) {
      console.log("error");
      return void 0;
    }
  }

  testCrossDomain(): string {
    return 'test cross domain!';
  }

  /**
   *
   * @param requestBody
   */
  async register(requestBody: any): Promise<any> {
    const {name,realName,password,rePassword,mobile} = requestBody;
    if(password !== rePassword) {
      return {
          code: 400,
          message: "两次输入密码不一致"
      }
    }

    const user = await this.findOne(name);
    console.log("user:" + user);
    if(user !== undefined) {
      return {
          code: 400,
          message: "该用户已经存在"
      }
    }

    const salt = makeSalt();
    const hashPassword = encryptPassword(password,salt);
    try {
     this.userRepository.createQueryBuilder()
       .insert()
       .into(User)
       .values({
         name: name,
         realName: realName,
         password: hashPassword,
         mobile: mobile,
         salt: salt,
         isLogin: 0,
         score: 1500
       }).execute();
      return {
        code: 200,
        message: "注册成功"
      }
    }
    catch (error) {
        return {
          code:503,
          message: 'Service error: ${error}'
        }
    }

  }
}
