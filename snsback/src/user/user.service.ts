import { Body, Controller, Get, Post } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async login(email: string, password: string) {
    const user = this.prisma.user.findUnique({
      where: { Email: email },
    });
    if (!user) {
      throw new NotFoundError('user not found');
    }
    return user;
  }

  async signin(name: string, email: string, password: string) {
    const user = this.prisma.user.create({
      data: {
        name: name,
        Email: email,
        Password: password,
      },
    });
    return user;
  }
}
