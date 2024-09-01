import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alert } from './entities/alert.entity';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';

@Injectable()
export class AlertService {
  constructor(
    @InjectRepository(Alert)
    private readonly alertRepository: Repository<Alert>,
  ) { }

  async create(createDto: CreateAlertDto): Promise<Alert> {
    const alert = this.alertRepository.create(createDto);
    return this.alertRepository.save(alert);
  }

  async findAll(): Promise<Alert[]> {
    return this.alertRepository.find();
  }

  async findOne(id: number): Promise<Alert> {
    return this.alertRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDto: UpdateAlertDto): Promise<Alert> {
    await this.alertRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.alertRepository.delete(id);
  }
}
