import { HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { HttpException } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [];

  constructor() {}

  async findOne(id: string): Promise<User> {
    const finded = this.users.find(u => u.id === id);
    if (!finded) {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    return finded;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async create(user: any): Promise<User> {
    const created = new User(user);
    this.users = [...this.users, created];
    return created;
  }

  async update(id: string, user: any): Promise<User> {
    const found = this.findOne(id);
    const updated = { ...found, ...user };
    await this.remove(id);
    await this.create(updated);
    return updated;
  }

  async remove(id: string): Promise<User> {
    const found = await this.findOne(id);
    this.users = this.users.filter(u => u.id !== id);
    return found;
  }
}
