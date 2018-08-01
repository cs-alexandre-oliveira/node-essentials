let exec = require("child_proces").exec

exec('ls', function(err, stdout) {
  if(err)  {
    throw err
  }

  console.log('listing finished')
  console.log(stdout)
})