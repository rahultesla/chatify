var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http , {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
const port = 8080;
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];
http.listen(port, () => {
    console.log(`listening on *:${port}`);
});

io.on('connection', (socket) => { 

    console.log('new client connected');
    socket.emit('connection', null);
});

/*
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  */