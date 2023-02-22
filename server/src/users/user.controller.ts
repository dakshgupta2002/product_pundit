import { Controller, Post, Get, Body } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Get('login')
    getLogin(): string { return "Welcome to Login Page"; }


    @Post('login')
    async login(
        @Body('username') username: string,
        @Body('password') password: string
    ): Promise<Object> {
        const token = await this.userService.login(username, password);
        return {token};
    }
}