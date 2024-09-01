import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async signup(signupDto: SignupDto) {
    const { username, email, password } = signupDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userService.create({ username, email, password: hashedPassword });
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { user, token };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.findOneByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { user, token };
  }
}
