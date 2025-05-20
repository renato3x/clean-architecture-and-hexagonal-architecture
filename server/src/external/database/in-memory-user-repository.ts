import { User } from '@/core/model/user';

export class InMemoryUserRepository {
  private static readonly users: User[] = [];

  async insert(user: User) {
    const existentUser = await this.getByEmail(user.email);

    if (existentUser) {
      return;
    }

    InMemoryUserRepository.users.push(user);
  }

  async getByEmail(email: string) {
    return InMemoryUserRepository.users.find((u) => u.email === email) ?? null;
  }
}
