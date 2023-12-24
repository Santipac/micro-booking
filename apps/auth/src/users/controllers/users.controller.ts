import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../services/users.service';
import { CurrentUser } from '../../../../../libs/common/src/decorators/current-user.decorator';
import { UserDocument } from '../users.schema';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UserDocument) {
    return user;
  }

  @Delete('all')
  async deleteAllUsers() {
    return this.usersService.deleteAll();
  }
}
