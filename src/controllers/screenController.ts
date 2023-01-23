import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';

screen.config.highlightOpacity = 0.1;

class screenController {
  async prntScreen() {
    const position = await mouse.getPosition();
    const region = new Region(position.x - 200 / 2, position.y - 200 / 2, 200, 200);
    const imgRegion = await screen.grabRegion(region);
    const img = await imgRegion.toRGB();

    await screen.highlight(region);

    const jimpData = new Jimp({
      data: img.data,
      width: img.width,
      height: img.height,
    });

    const imgBuffer = await jimpData.getBufferAsync(Jimp.MIME_PNG);
    const imgBase64 = imgBuffer.toString('base64');

    return imgBase64;
  }
}

export default new screenController();
