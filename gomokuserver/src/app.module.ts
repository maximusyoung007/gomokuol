import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { UserController } from './users/user.controller';
import { ChatModule } from './chat/chat.module';

/**
 * 应用程序根模块
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '106.14.44.210',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'gomoku',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    UserModule,
    ChatModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
