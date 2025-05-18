import { TerminalUtils } from "@/app/util/terminal";
import { terminal } from "terminal-kit";
import { polymorphism } from "../fundamentals/polymorphism";
import { dependencyInversionPrinciple } from "../fundamentals/dependency-inversion-principle";

export async function fundamentalsMenu() {
  TerminalUtils.title('Fundamentals');

  const response = await terminal.singleColumnMenu([
    '1. Polymorphism',
    '2. Dependency Inversion Principle',
    'Back',
  ]).promise;

  switch(response.selectedIndex) {
    case 0:
      await polymorphism();
      break;
    case 1:
      await dependencyInversionPrinciple();
      break;
    default:
      return;
  }
}
