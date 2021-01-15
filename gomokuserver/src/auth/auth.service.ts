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
    const salt = user.salt;
    const hashPassword = encryptPassword(pass, salt);
    if (user && user.password === hashPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
