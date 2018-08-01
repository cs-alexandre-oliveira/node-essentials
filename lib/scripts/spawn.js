let spawn = require('child_process').spawn

let cp = spawn('node', ['alwaysTalking'])

cp.stdout.on('data', function(data) {
  console.log(`STDOUT: ${data.toString()}`)
})

cp.on('close', function() {
  console.log('FECHADU')
  process.exit()
})

setTimeout(function() {
  cp.stdin.write('STOPAUM')
}, 4000)