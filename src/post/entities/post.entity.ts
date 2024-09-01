import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_id: number;

    @Column()
    platform: string;

    @Column()
    content: string;

    @Column()
    likes: number;

    @Column()
    comments: number;

    @Column()
    post_id: number;

    @Column()
    shares: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    @ManyToOne(() => User, user => user.posts)
    user: User;
}
