let waitTime = 3000
let currentTime = 0
let waitInterval = 500
let percentWaited = 0

function writeWaitingPercent(p)  {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`Waiting .... ${p}%`)
}

let interval = setInterval(function() {
  currentTime += waitInterval
  percentWaited = Math.floor((currentTime/waitTime) * 100)
  writeWaitingPercent(percentWaited)
}, waitInterval)

setTimeout(function() {
  clearInterval(interval)
  writeWaitingPercent(100)
  console.log('\n\n doninho \n\n')
}, waitTime)

process.stdout.write('\n\n\n')
writeWaitingPercent(percentWaited)