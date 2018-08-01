let fs = require('fs')

if(fs.existsSync('blu'))  {
  console.log('Directory already there')
} else  {
  fs.mkdir('blu', function(err) {
    if(err)  {
      console.log(err)
    } else {
      console.log('Directory Created')
    }
  })
}