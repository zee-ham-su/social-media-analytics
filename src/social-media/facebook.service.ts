import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class FacebookService {
    private readonly accessToken: string;

    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService
    ) {
        this.accessToken = this.configService.get<string>('FACEBOOK_ACCESS_TOKEN');
    }

    async fetchPosts(pageId: string): Promise<any> {
        const response = await lastValueFrom(
            this.httpService.get(`https://graph.facebook.com/${pageId}/posts`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                }
            })
        );
        return response.data;
    }
}
