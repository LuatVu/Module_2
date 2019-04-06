const express = require('express');
const app = express();
const ioServer = require('socket.io');
const WhiteBoard = require('./src/whiteBoardServer');
const server = require('http').Server(app);



app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('views/css'));
app.use(express.static('views/js'));
app.use(express.static('src'));



app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/boards', (req,res)=>{
    res.render('board');
});

server.listen(3000, ()=>{
    console.log('Server is started at PORT: ',3000);
});



ioServer(server).on('connection', function(socket){
    console.log('Socket is: ', socket);
    WhiteBoard.addSocket(socket);
});

