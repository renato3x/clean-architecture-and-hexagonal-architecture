import { registerUser } from "../user/register-user";
import { TerminalUtils } from "../util/terminal";

export async function userMenu() {
  TerminalUtils.title('User');

  const [index] = await TerminalUtils.menu([
    '1. Register user',
    'Back',
  ]);

  switch (index) {
    case 0:
      await registerUser();
      break;
    default:
      return;
  }
}
