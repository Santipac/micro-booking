import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from './users/users.module';
import { LoggerModule } from '@app/common';

@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
