import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}

  @Post('login')
  async login(@Body() body) {
    const user = this.user.login(body.email, body.password);
    return user;
  }
}
