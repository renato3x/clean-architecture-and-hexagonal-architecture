import { TerminalUtils } from "@/util/terminal";
import { terminal } from "terminal-kit";

export async function fundamentalsMenu() {
  TerminalUtils.title('Fundamentals');

  const response = await terminal.singleColumnMenu([
    '1. Polymorphism',
    'Back',
  ]).promise;

  switch(response.selectedIndex) {
    case 1:
      return;
  }
}
