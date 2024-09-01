import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class SignupDto {
    @ApiProperty({ description: 'The email of the user' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'The username of the user' })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ description: 'The password of the user', format: 'password' })
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
