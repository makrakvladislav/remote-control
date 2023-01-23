import { ICommand } from 'src/helpers';
import { down, left, mouse, right, up } from '@nut-tree/nut-js';

class NavigationController {
  async mouseUp(data: ICommand) {
    await mouse.move(up(Number(data.x)));
  }

  async mouseDown(data: ICommand) {
    await mouse.move(down(Number(data.x)));
  }

  async mouseLeft(data: ICommand) {
    await mouse.move(left(Number(data.x)));
  }

  async mouseRight(data: ICommand) {
    await mouse.move(right(Number(data.x)));
  }

  async mousePosition() {
    return await mouse.getPosition();
  }
}

export default new NavigationController();
