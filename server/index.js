const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../client-js', 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client-js', 'index.html'));
});

io.on('connection', (socket) => {
  socket.on('login', (data) => {
    data ? (socket.username = data) : (socket.username = 'Аноним');
    io.emit('connected', socket.username);
    io.emit('add user', socket.username);
  });
  socket.on('disconnect', () => {
    io.emit('leave', socket.username);
  });
  socket.on('chat message', (data) => {
    io.emit('chat message', { message: data, user: socket.username });
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
