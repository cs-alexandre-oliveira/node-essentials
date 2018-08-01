let readline = require('readline')
let rl = readline.createInterface(process.stdin, process.stdout)
let fs = require('fs')
let realPerson = {
  name: '',
  sayings: []
}

rl.question('What is the name of person? ', function(answer)  {
  realPerson.name = answer

  let stream = fs.createWriteStream(realPerson.name +  '.md')
  stream.write(`${realPerson.name}\n======\n\n`)
//fs.writeFileSync(realPerson.name + '.md', `${realPerson.name}\n======\n\n`)

  rl.setPrompt(`What would ${realPerson.name} say? `)
  rl.prompt() 

  rl.on('line', function(saying) {

    if(saying.toLowerCase().trim() === 'exit')  {
      stream.close()
      rl.close()
    } else {
      realPerson.sayings.push(saying.trim())
      stream.write(`* ${saying.trim()} \n`)
  //fs.appendFile(realPerson.name + '.md',`* ${saying.trim()} \n` )

      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `)
      rl.prompt()
    }
    
  })
})

rl.on('close',  function()  {
  console.log('%s is a real person that says %j', realPerson.name, realPerson.sayings)
  process.exit()
}) 