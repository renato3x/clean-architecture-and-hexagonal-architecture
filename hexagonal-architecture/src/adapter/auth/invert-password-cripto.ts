import { CriptoProvider } from "@/core/user/service/cripto-provider";

// In Hexagonal Architecture, this is an Adapter
// Adapters does not make part of application core business
export class InvertPasswordCripto implements CriptoProvider {
  cripto(value: string) {
    return value.split('').reverse().join('');
  }
}
