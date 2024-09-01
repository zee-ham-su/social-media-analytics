import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('social_media_accounts')
export class SocialMediaAccount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    platform: string;

    @Column({ unique: true })
    account_id: string;

    @ManyToOne(() => User, user => user.socialMediaAccounts)
    user: User;

    @Column()
    access_token: string;

    @CreateDateColumn()
    connected_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
