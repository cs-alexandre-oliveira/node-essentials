let fs = require('fs')

fs.renameSync('./blu/Jorginho.md', './blu/jorginho.md')

console.log('Config md file renamed')

fs.rename('./alexandre-oliveira.md', './blu/alexandre-oliveira.md', function(err)  {
  if(err)  {
    console.log(err)
  } else  {
    console.log('Jorginho.md moved successfully!')
  }
})