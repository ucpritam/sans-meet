const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  }
});

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    var user_name = user.name.split(" ")[0];
    var firstName = user_name.charAt(0).toUpperCase() + user_name.slice(1);

    socket.emit('message', { user: 'admin', text: `${firstName}, welcome to Samskritam.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${firstName} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      var user_name = user.name.split(" ")[0];
      var firstName = user_name.charAt(0).toUpperCase() + user_name.slice(1);
      io.to(user.room).emit('message', { user: 'Admin', text: `${firstName} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));