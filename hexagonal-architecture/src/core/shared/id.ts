import { v4 } from 'uuid';

export class Id {
  static generateHash() {
    return v4();
  }
}
