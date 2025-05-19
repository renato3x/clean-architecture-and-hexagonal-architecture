import { CriptoProvider } from "@/core/user/service/cripto-provider";

export class SpacePasswordCripto implements CriptoProvider {
  cripto(value: string): string {
    return value.split('').join(' ');
  }
}
