import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  testCrossDomain(): string {
    return this.userService.testCrossDomain();
  }

  @Post('findOne')
  findOne(@Body() userDto: any): Promise<User> {
    return this.userService.findOne(userDto.name);
  }

  @Post('register')
  register(@Body() userDto: any): Promise<any> {
    return this.userService.register(userDto);
  }
}
