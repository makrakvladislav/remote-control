import { ICommand } from 'src/helpers';
import { Button, down, left, mouse, Point, right, straightTo, up } from '@nut-tree/nut-js';

class DrawingController {
  async drawCircle(data: ICommand) {
    const pos = await mouse.getPosition();
    const radius = Number(data.x);
    await mouse.move(left(radius));
    await mouse.pressButton(Button.LEFT);

    for (let i = 0; i < Math.PI * 2; i += (Math.PI * 2) / 500) {
      const x = pos.x - radius * Math.cos(i);
      const y = pos.y - radius * Math.sin(i);
      await mouse.move(straightTo(new Point(x, y)));
    }
    await mouse.releaseButton(Button.LEFT);

    return data.command;
  }

  async drawSquare(data: ICommand) {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(Number(data.x)));
    await mouse.move(down(Number(data.x)));
    await mouse.move(left(Number(data.x)));
    await mouse.move(up(Number(data.x)));
    await mouse.releaseButton(Button.LEFT);

    return data.command;
  }

  async drawRectangle(data: ICommand) {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(Number(data.x)));
    await mouse.move(down(Number(data.y)));
    await mouse.move(left(Number(data.x)));
    await mouse.move(up(Number(data.y)));
    await mouse.releaseButton(Button.LEFT);

    return data.command;
  }
}

export default new DrawingController();
