import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      //提供从请求中提取 JWT 的方法。我们将在 API 请求的授权头中提供token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //如果我们的路由提供了一个过期的JWT，请求将被拒绝
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
