import { CriptoProvider } from '@/core/service/cripto-provider';
import bcrypt from 'bcrypt';

export class HashPasswordCripto implements CriptoProvider {
  cripto(value: string): string {
    return bcrypt.hashSync(value, 10);
  }
}
