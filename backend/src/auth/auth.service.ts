import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService, 
        private jwtService: JwtService
        ) {}

    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.usersService.findOneByUsername(username);
        const result = (user) ? bcrypt.compareSync(password, user.password): false;
        if(user && result){
            const {password, username, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any){
        const payload = {name: user.username, id: user.id};

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
