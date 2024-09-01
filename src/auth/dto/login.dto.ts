import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class LoginDto {
    @ApiProperty({ description: 'The username of the user' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'The password of the user', format: 'password' })
    @IsString()
    @IsNotEmpty()
    password: string;
}
