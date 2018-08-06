function grab(flag) {
  let index = process.argv.indexOf(flag)
  return (index === -1) ? null : process.argv[index+1]
}

let greenting = grab('--greeting')
let user = grab('--user')

if(!user || !greenting) {
  console.log('You Blew it!')
} else  {
  console.log(`Welcome ${user}, BUBBAAAA ${greenting}`)
}