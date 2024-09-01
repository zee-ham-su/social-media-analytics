import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { SocialMediaAccount } from '../../social-media-account/entities/social-media-account.entity';

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
}
