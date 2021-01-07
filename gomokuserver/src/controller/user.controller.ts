import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from "../service/user.service";
import {User} from "../entity/user.entity";
import {UserDto} from "../dto/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('test')
    testCrossDomain(): string {
        return this.userService.testCrossDomain();
    }

    @Post("findOne")
    findOne(@Body() userDto:UserDto): Promise<User[]> {
        return this.userService.findOne(userDto.name,userDto.password);
    }
}
