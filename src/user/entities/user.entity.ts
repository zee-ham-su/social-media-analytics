import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { SocialMediaAccount } from '../../social-media-account/entities/social-media-account.entity';
import { Post } from '../../post/entities/post.entity';
import { Alert } from '../../alert/entities/alert.entity';
import { AnalyticsData } from 'src/analytics-data/entities/analytics-datum.entity';
@Entity('users')

export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true, type: 'varchar', length: 255, nullable: false })
    username: string;
    
    @Column({ unique: true, type: 'varchar', length: 255, nullable: false })
    email: string;
    
    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;

    @Column({ nullable: true })
    profile_picture: string;
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => SocialMediaAccount, socialMediaAccount => socialMediaAccount.user)
    socialMediaAccounts: SocialMediaAccount[];

    @OneToMany(() => Post, post => post.user)
    posts: Post[];

    @OneToMany(() => AnalyticsData, analyticsData => analyticsData.user)
    analyticsData: AnalyticsData[];

    @OneToMany(() => Alert, alert => alert.user)
    alerts: Alert[];
}
