const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const { Server } = require('socket.io');
const io = new Server(server);

let usersOnline = [];
const messages = [];

const cleanMessagesHistory = () => {
  if (messages.length > 30) {
    messages.splice(0, 1);
  }
};

app.use(express.static(path.join(__dirname, '../client-js', 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client-js', 'index.html'));
});

io.on('connection', (socket) => {
  socket.on('login', (data) => {
    io.emit('connected', socket.username);
    usersOnline.push(socket.username);
    io.emit('update online', usersOnline);
    //load messages
    io.emit('chat message', { message: data, user: socket.username, messages });
  });
  socket.on('disconnect', () => {
    io.emit('leave', socket.username);
    usersOnline = usersOnline.filter((user) => user !== socket.username);
    io.emit('update online', usersOnline);
  });
  socket.on('chat message', (data) => {
    messages.push({ message: data, user: socket.username });
    cleanMessagesHistory();
    io.emit('chat message', { message: data, user: socket.username, messages });
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
