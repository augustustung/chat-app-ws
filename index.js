const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const delay = require('delay');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/views/index.html");
});

io.on('connection', (socket) => {
  console.log('user connect');
  socket.on('on-chat', data => {
    io.emit('user-chat', data);
  });
});


server.listen(8080, () => console.log("Server is running on http://localhost:8080"));

async function broadcastBitcoinPrice() {
  while(true) {
    const price = 31750 + Math.random() * 400;
    io.emit('bitcoin-price', { price: parseFloat(price.toFixed(2)) });
    await delay(1000);
  }
}

broadcastBitcoinPrice();