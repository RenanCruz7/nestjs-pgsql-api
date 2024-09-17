import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entity/user.entity';
import { UserRole } from '../enums/user-roles.enum';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createAdminUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto, UserRole.ADMIN);
  }
}