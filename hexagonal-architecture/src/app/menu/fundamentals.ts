import { TerminalUtils } from "@/app/util/terminal";
import { terminal } from "terminal-kit";
import { polymorphism } from "../fundamentals/polymorphism";

export async function fundamentalsMenu() {
  TerminalUtils.title('Fundamentals');

  const response = await terminal.singleColumnMenu([
    '1. Polymorphism',
    'Back',
  ]).promise;

  switch(response.selectedIndex) {
    case 0:
      await polymorphism();
      break;
    case 1:
      return;
  }
}
