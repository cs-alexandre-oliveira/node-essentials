let http = require('http')

let server = http.createServer(function(req, res) { 
  res.writeHead(200, {'Content-Type':  'text/html'})
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Response</title>
      </head>
      <body>
        <p>Serving HTML Text</p>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
    </html>
  `)
})

server.listen(3000)

console.log('Server listening port 3000')