import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    testCrossDomain(): string {
        return 'test cross domain!';
    }
}
