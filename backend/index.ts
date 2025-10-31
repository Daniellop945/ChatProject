import { WebSocketServer } from 'ws';

const port = 4000; 

const wss = new WebSocketServer({ port });

console.log(`Servidor WebSocket iniciado en ws://localhost:${port}`);

wss.on('connection', (ws) => {
  console.log('Cliente conectado');
  ws.on('message', (message) => {
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
        client.send(`ECHO: ${message}`);
      }
    });
  });
});