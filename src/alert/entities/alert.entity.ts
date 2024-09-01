import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

@Entity('alerts')
export class Alert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, user => user.alerts)
    user: User;
}
