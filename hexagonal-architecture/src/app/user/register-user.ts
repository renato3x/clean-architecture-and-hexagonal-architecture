import { User } from "@/core/user/model/user";
import { TerminalUtils } from "../util/terminal";
import { RegisterUser } from "@/core/user/service/register-user";
// import { InvertPasswordCripto } from "@/adapter/auth/invert-password-cripto";
// import { SpacePasswordCripto } from "@/adapter/auth/space-password-cripto";
import { HashPasswordCripto } from "@/adapter/auth/hash-password-cripto";
import { InMemoryUserRepository } from "@/adapter/database/in-memory-user-repository";

export async function registerUser() {
  TerminalUtils.title('Register user');
  try {
    const name = await TerminalUtils.requiredField('Name: ', 'John Doe');
    const email = await TerminalUtils.requiredField('Email: ', 'john.doe@email.com');
    const password = await TerminalUtils.requiredField('Password: ', 'iS2codes');

    const user: User = {
      name,
      email,
      password,
    };

    const useCase = new RegisterUser(
      new HashPasswordCripto(),
      new InMemoryUserRepository()
    );

    await useCase.run(user);

    await TerminalUtils.success('User registered successfully')

    await TerminalUtils.waitForEnter();

    await useCase.run(user);
  } catch (error) {
    await TerminalUtils.error((error as Error).message);
  } finally {
    await TerminalUtils.waitForEnter();
  }
}
