import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { encryptPassword } from '../util/cryptogram';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 检索用户并验证密码
   * @param name
   * @param pass
   */
  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(name);
    if (user !== undefined) {
      const salt = user.salt;
      const hashPassword = encryptPassword(pass, salt);
      if (user.password === hashPassword) {
        return {
          code: 1,
          msg: '验证用户成功',
          user: user,
        };
      }
    }
    return {
      code: 2,
      msg: '账号或密码不正确',
    };
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.id };
    try {
      return {
        code: 200,
        access_token: this.jwtService.sign(payload),
        msg: '登录成功',
      };
    } catch (err) {
      return {
        code: 600,
        msg: '账号或密码错误',
      };
    }
  }
}
