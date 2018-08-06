let express = require('express')
let http = require('http')
let app = express()
let server = http.createServer(app).listen(3000)
let io = require('socket.io')(server)

app.use(express.static('./public'))

io.on('connection', function(socket)  {
  socket.on('chat', function(message)  {
    socket.broadcast.emit('emmit', message)
  })
  socket.emit('message', 'Welcome to Cyber Chat')
})

console.log('Starting Socket App - LocalHost port 3000')