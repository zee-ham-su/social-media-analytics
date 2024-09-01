import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { SocialMediaAccountModule } from './social-media-account/social-media-account.module';
import { PostModule } from './post/post.module';
import { AnalyticsDataModule } from './analytics-data/analytics-data.module';
import { AlertModule } from './alert/alert.module';
import { AuthModule } from './auth/auth.module';
import { SocialMediaModule } from './social-media/social-media.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    SocialMediaAccountModule,
    PostModule,
    AnalyticsDataModule,
    AlertModule,
    AuthModule,
    SocialMediaModule,
  ],
})
export class AppModule {}
