import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocialMediaAccount } from './entities/social-media-account.entity';
import { CreateSocialMediaAccountDto } from './dto/create-social-media-account.dto';
import { UpdateSocialMediaAccountDto } from './dto/update-social-media-account.dto';

@Injectable()
export class SocialMediaAccountService {
  constructor(
    @InjectRepository(SocialMediaAccount)
    private readonly socialMediaAccountRepository: Repository<SocialMediaAccount>,
  ) { }

  async create(createDto: CreateSocialMediaAccountDto): Promise<SocialMediaAccount> {
    const account = this.socialMediaAccountRepository.create(createDto);
    return this.socialMediaAccountRepository.save(account);
  }

  async findAll(): Promise<SocialMediaAccount[]> {
    return this.socialMediaAccountRepository.find();
  }

  async findOne(id: number): Promise<SocialMediaAccount> {
    return this.socialMediaAccountRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDto: UpdateSocialMediaAccountDto): Promise<SocialMediaAccount> {
    await this.socialMediaAccountRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.socialMediaAccountRepository.delete(id);
  }
}
