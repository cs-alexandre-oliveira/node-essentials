let webSocketServer = require('ws').Server
let wss = new webSocketServer({ port: 3000 })

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    if( message ===  'exit') {
      ws.close()
    } else {
      wss.clients.forEach(function(client)  {
        client.send(message)
      })
    }
  })
  ws.send('Welcome to cyber chat')
})