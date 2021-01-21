import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get('test')
  testCrossDomain(): string {
    return this.userService.testCrossDomain();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post('findOne')
  async findOne(@Body() userDto: any): Promise<any> {
    const u = await this.userService.findOne(userDto.name);
    if (u === undefined) {
      return {
        code: 500,
        msg: '没有找到该用户',
      };
    }
    return {
      code: 200,
      msg: '找到用户',
      data: u,
    };
  }

  @Post('register')
  register(@Body() userDto: any): Promise<any> {
    return this.userService.register(userDto);
  }

  @Post('login')
  async login(@Body() userDto: any): Promise<any> {
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
