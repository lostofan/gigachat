require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  maxHttpBufferSize: 1e7,
  cors: {
    origin: `${process.env.CLIENT}`,
    methods: ['GET', 'POST'],
  },
});

let usersOnline = [];
const messages = [];
const cleanMessagesHistory = () => {
  if (messages.length > 30) {
    messages.splice(0, 1);
  }
};
io.on('connection', (socket) => {
  socket.on('login', (data) => {
    socket.username = data.name;
    io.emit('connected', data.name);
    usersOnline.push({ id: data?.id, name: data.name, avatar: data.avatar });
    //load users
    io.emit('update online', usersOnline);
    //load messages
    io.emit('update messages', messages);
  });
  socket.on('disconnect', () => {
    io.emit('leave', socket.username);
    usersOnline = usersOnline.filter((user) => user.name !== socket.username);
    io.emit('update online', usersOnline);
  });
  socket.on('chat message', (data) => {
    messages.push({
      id: data?.id,
      message: data.message,
      user: data.user,
      avatar: data.avatar,
      image: data.image,
      type: data.image ? 'image' : 'text',
    });
    cleanMessagesHistory();
    io.emit('update messages', messages);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('listening on', process.env.PORT);
});
