/*const http = require('http');

const server = http.createServer((req, res)=>{
    res.status=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("<h1> Hola Mundo </h1>");
})

server.listen(3000,()=>{
    console.log("Server running");
});*/

const express = require('express');



const app = express();
app.use(express.json());

app.listen(5000, function(){
    console.log("Server running on port 5000");
})

app.post('/post', function(req, res){
    var name = req.body.user
    res.send(`Welcome ${name}`);
});

app.get('/', function(req, res){
    res.send("<h1>You're on the homepage</h1>");
})