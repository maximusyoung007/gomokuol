import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { encryptPassword } from '../util/cryptogram';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

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
}
