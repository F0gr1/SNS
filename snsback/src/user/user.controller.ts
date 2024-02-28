import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}

  @Post('login')
  async login(@Body() body) {
    try {
      const user = await this.user.login(body.email, body.password);
      return { user, message: 'Login successful' };
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
