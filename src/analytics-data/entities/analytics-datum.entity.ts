import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

@Entity('analytics_data')
export class AnalyticsData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    metric: string;

    @Column('jsonb')
    data: any;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, user => user.analyticsData)
    user: User;
}
