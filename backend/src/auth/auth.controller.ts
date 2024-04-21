import { Controller, Post, Get, UseGuards, Request, ForbiddenException, Body, ValidationPipe, Response } from '@nestjs/common';
import { LocalAuthGuard } from './local.auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UsersService, private readonly prisma: PrismaService) { }
    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Request() req): any {
        return this.authService.login(req.user);
    }
    @Post('signup')
    signup(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
    @Post('logout')
    @UseGuards(JwtAuthGuard)
    logout(@Request() req, @Response() res): any {
        if (req.user) {
            res.setHeader('Set-Cookie', 'authToken=; Max-Age=0; Path=/; HttpOnly; Secure');
            return { message: 'Logged Out' };
        }
        throw new ForbiddenException();
    }
    @Get()
    @UseGuards(JwtAuthGuard)
    async protected(@Request() req): Promise<any> {
        return req.user;
    }
}