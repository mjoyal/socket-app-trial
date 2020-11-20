const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3001;

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

http.listen('PORT', () => {
  console.log('listening on *:3000');
});

