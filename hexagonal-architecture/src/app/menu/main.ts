import { TerminalUtils } from '@/app/util/terminal';
import { terminal } from 'terminal-kit';
import { fundamentalsMenu } from './fundamentals';

export async function mainMenu() {
  TerminalUtils.title('Main menu');

  const response = await terminal.singleColumnMenu([
    '1. Fundamentals',
    'Exit',
  ]).promise;

  switch(response.selectedIndex) {
    case 0:
      await fundamentalsMenu();
      break;
    default:
      process.exit(0);
  }

  mainMenu();
}
