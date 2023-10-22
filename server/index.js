const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const { Server } = require('socket.io');
const io = new Server(server, { maxHttpBufferSize: 1e7 });

let usersOnline = [];
const messages = [];

const cleanMessagesHistory = () => {
  if (messages.length > 30) {
    messages.splice(0, 1);
  }
};
const getAvatar = (login) => {
  let src = `https://api.multiavatar.com/${login}.png?apikey=xC6uEZzUY4r1nJ`;
  return src;
};
app.use(express.static(path.join(__dirname, '../client-js', 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client-js', 'index.html'));
});
io.on('connection', (socket) => {
  socket.on('login', (data) => {
    socket.username = data;
    io.emit('connected', socket.username);
    usersOnline.push({ user: socket.username, avatar: getAvatar(socket.username) });
    //load users
    io.emit('update online', usersOnline);
    //load messages
    io.emit('chat message', {
      user: socket.username,
      avatar: getAvatar(socket.username),
      messages,
    });
  });
  socket.on('disconnect', () => {
    io.emit('leave', socket.username);
    usersOnline = usersOnline.filter((user) => user.user !== socket.username);
    io.emit('update online', usersOnline);
  });
  socket.on('chat message', (data) => {
    messages.push({
      message: data,
      user: socket.username,
      avatar: getAvatar(socket.username),
      type: 'text',
    });
    cleanMessagesHistory();
    io.emit('chat message', { message: data, user: socket.username, messages });
  });
  socket.on('get image', (data) => {
    messages.push({
      image: data,
      user: socket.username,
      avatar: getAvatar(socket.username),
      type: 'image',
    });
    cleanMessagesHistory();
    io.emit('chat message', { image: data, user: socket.username, messages });
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
