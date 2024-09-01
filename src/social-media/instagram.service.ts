import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class InstagramService {
    private readonly accessToken: string;

    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService
    ) {
        this.accessToken = this.configService.get<string>('INSTAGRAM_ACCESS_TOKEN');
    }

    async fetchPosts(userId: string): Promise<any> {
        const response = await lastValueFrom(
            this.httpService.get(`https://graph.instagram.com/${userId}/media`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                }
            })
        );
        return response.data;
    }
}
