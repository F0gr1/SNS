import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}

  @Post('login')
  async login(@Body() body) {
    try {
      const user = await this.user.login(body.email, body.password);
      if (!user) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `null user error`,
          },
          404,
        );
      }
      return { user, message: 'Login successful' };
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  @Post('signin')
  async signin(@Body() body) {
    try {
      const user = await this.user.signin(body.name, body.email, body.password);
      return { user, message: 'signin successfull' };
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
