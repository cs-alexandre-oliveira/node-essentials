let express = require('express')
let app = express()

app.use(function(req, res, next)  {
  console.log(`${req.method} request for '${req.url}'`)
  next()
})

app.use(express.static('./public/'))

app.listen(3000)

console.log('Listened Port 3000')

module.exports = app