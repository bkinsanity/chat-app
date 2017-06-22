const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Mike',
        text: "Hey, what's up?",
        createAt: 12345
    });

    socket.on('createMessage', (message) => {
        console.log('New message', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
    })  

    socket.on('disconnect', () => {
        console.log('Disconnected from server.');
    })  
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
})