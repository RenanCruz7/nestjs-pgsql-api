import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entity/user.entity';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('admin')
  async createAdmin(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createAdminUser(createUserDto);
  }
}