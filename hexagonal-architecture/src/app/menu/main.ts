import { TerminalUtils } from '@/app/util/terminal';
import { terminal } from 'terminal-kit';
import { fundamentalsMenu } from './fundamentals';
import { userMenu } from './user';

export async function mainMenu() {
  TerminalUtils.title('Main menu');

  const response = await terminal.singleColumnMenu([
    '1. Fundamentals',
    '2. User',
    'Exit',
  ]).promise;

  switch(response.selectedIndex) {
    case 0:
      await fundamentalsMenu();
      break;
    case 1:
      await userMenu();
      break;
    default:
      process.exit(0);
  }

  mainMenu();
}
