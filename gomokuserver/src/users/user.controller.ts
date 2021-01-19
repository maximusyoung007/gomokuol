import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Get('test')
  testCrossDomain(): string {
    return this.userService.testCrossDomain();
  }

  @Post('findOne')
  findOne(@Body() userDto: any): Promise<User> {
    console.log('userDto:' + userDto);
    return this.userService.findOne(userDto.name);
  }

  @Post('register')
  register(@Body() userDto: any): Promise<any> {
    return this.userService.register(userDto);
  }

  @Post('login')
  async login(@Body() userDto: any): Promise<any> {
    console.log(userDto);
    const authResult = await this.authService.validateUser(
      userDto.username,
      userDto.password,
    );
    switch (authResult.code) {
      case 1:
        return this.authService.login(authResult.user);
      case 2:
        return {
          code: 600,
          msg: '账号或密码错误',
        };
      default:
        return {
          code: 600,
          msg: '账号或密码错误',
        };
    }
  }
}
