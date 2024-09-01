import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Social Media Analytics App! Track, Analyze, and Visualize Your Social Media Performance in Real-Time.';
  }
}
