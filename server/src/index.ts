import 'dotenv/config';
import express from 'express';
import { RegisterUser } from './core/service/register-user';
import { HashPasswordCripto } from './external/auth/hash-password-cripto';
import { InMemoryUserRepository } from './external/database/in-memory-user-repository';
import { RegisterUserController } from './external/api/register-user.controller';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const registerUser = new RegisterUser(new HashPasswordCripto(), new InMemoryUserRepository());

new RegisterUserController(app, registerUser);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
