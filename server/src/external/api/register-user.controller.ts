import { RegisterUser } from '@/core/service/register-user';
import { Application } from 'express';

export class RegisterUserController {
  constructor(app: Application, usecase: RegisterUser) {
    app.post('/users', async (request, response) => {
      try {
        await usecase.run(request.body);
        response.status(201).send();
      } catch (error: any) {
        response.status(400).send(error.message);
      }
    });
  }
}
