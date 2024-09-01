import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    private readonly logger = new Logger(JwtAuthGuard.name);

    constructor(private readonly jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) {
            this.logger.warn('No token provided');
            throw new UnauthorizedException('No token provided');
        }

        try {
            const payload = await this.jwtService.verifyAsync(token);

            if (this.isExpiredToken(payload)) {
                this.logger.warn('Token has expired');
                throw new UnauthorizedException('Token has expired');
            }

            request['user'] = payload;
        } catch (error) {
            this.logger.error('Invalid token', error.stack);
            throw new UnauthorizedException('Invalid token');
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const authHeader = request.headers.authorization;
        if (!authHeader) return undefined;

        const [bearer, token] = authHeader.split(' ');
        return bearer === 'Bearer' ? token : undefined;
    }

    private isExpiredToken(payload: any): boolean {
        const currentTime = Math.floor(Date.now() / 1000);
        return payload.exp < currentTime;
    }
}
