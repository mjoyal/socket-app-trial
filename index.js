const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
}); 

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msgInfo) => {

    console.log(msgInfo)
    io.emit('chat message', msgInfo);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen('3001', () => {
  console.log('listening on *:3000');
});

