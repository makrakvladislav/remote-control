import { createWebSocketStream, WebSocket, WebSocketServer } from 'ws';
import { httpServer } from './http_server/index';
import { commandParser } from './helpers';
import { controllers } from './controllers/commandController';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const server = new WebSocketServer({ port: 8080 });
console.log('WebSocket Server on the 8080 port! (http://localhost:8080)');

server.on('connection', (ws: WebSocket) => {
  ws.send('websocket connected');

  const duplex = createWebSocketStream(ws, {
    decodeStrings: false,
    encoding: 'utf8',
  });

  duplex.on('data', async (command: string) => {
    try {
      console.log(`<- ${command}`);
      const commandData = commandParser(command);
      const response = await controllers(commandData);
      if (typeof response === 'string') {
        console.log(`-> ${response}`);
        duplex.write(response);
      } else {
        duplex.write(command);
      }
    } catch (err) {
      console.log(err);
    }
  });

  ws.on('close', () => {
    console.log('User disconnected from WebSocket server.');
  });
});
