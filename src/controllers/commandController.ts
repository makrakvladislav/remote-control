import { ICommand } from 'src/helpers';
import DrawingController from './drawingController';
import NavigationController from './navigationController';
import screenController from './screenController';

export const controllers = async (data: ICommand) => {
  if (data.command === 'mouse_up') {
    await NavigationController.mouseUp(data);
  } else if (data.command === 'mouse_down') {
    await NavigationController.mouseDown(data);
  } else if (data.command === 'mouse_left') {
    await NavigationController.mouseLeft(data);
  } else if (data.command === 'mouse_right') {
    await NavigationController.mouseRight(data);
  } else if (data.command === 'mouse_position') {
    const pos = await NavigationController.mousePosition();
    return `mouse_position ${pos.x},${pos.y}`;
  } else if (data.command === 'draw_circle') {
    await DrawingController.drawCircle(data);
  } else if (data.command === 'draw_square') {
    await DrawingController.drawSquare(data);
  } else if (data.command === 'draw_rectangle') {
    await DrawingController.drawRectangle(data);
  } else if (data.command === 'prnt_scrn') {
    const img = await screenController.prntScreen();
    return `prnt_scrn ${img}`;
  } else {
    return `command not found`;
  }
};
