let fs = require('fs')

try {
  fs.unlinkSync('./lib/config.json')
} catch (err) {
  console.log(err)
}

fs.unlink('./blu/jorginho.md', function(err)  {
  if(err)  {
    console.log(err)
  } else  {
    console.log('Notes.md removed')
  }
})