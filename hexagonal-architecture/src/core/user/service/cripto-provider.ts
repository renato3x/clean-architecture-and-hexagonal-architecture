// in Hexagonal Architecture, this is a PORT
// the PORT is part of core
export interface CriptoProvider {
  cripto(value: string): string;
}
