import { User } from "../model/user";

export interface UserRepository {
  insert(user: User): Promise<void>;
  getByEmail(email: string): Promise<User | null>;
}
