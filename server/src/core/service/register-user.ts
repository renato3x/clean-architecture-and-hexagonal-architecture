import { User } from '../model/user';
import { Errors } from '../shared/errors';
import { Id } from '../shared/id';
import { UseCase } from '../shared/usecase';
import { CriptoProvider } from './cripto-provider';
import { UserRepository } from './user-repository';

export class RegisterUser implements UseCase<User, void> {
  constructor(
    private readonly criptoProvider: CriptoProvider,
    private readonly userRepository: UserRepository,
  ) {}

  async run(input: User) {
    const existentUser = await this.userRepository.getByEmail(input.email);

    if (existentUser) {
      throw new Error(Errors.USER_ALREADY_EXISTS);
    }

    const user = {
      ...input,
      password: this.criptoProvider.cripto(input.password!),
      id: Id.generateHash(),
    };

    await this.userRepository.insert(user);
  }
}
