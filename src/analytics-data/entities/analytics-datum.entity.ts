import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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
}
