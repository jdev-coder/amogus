var app = require('express')()
var data = []

app.get('/',function(req,res){
  res.send('v1.0.1: Added get data feature.')
})

app.get('/setData/:password/:data/:username/',function(req,res){
  if (req.params.password == process.env.pass && req.params.username && req.params.data){
    data[req.params.username] = req.params.data
    res.send('Successfully set data for: '+req.params.username+'!')
    res.end()
  }else{
    res.send('Failed to set data.')
  }
})

app.get('/logData/:password/',function(req,res){
  if (req.params.password == process.env.pass){
    console.log(data)
    res.send('Successfully logged data to console!')
    res.end()
  }else{
    console.log('Failed to log data to console.')
  }
})

app.get('/getData/:password/:username/',function(req,res){
  if (req.params.password == process.env.pass && req.params.username && data[req.params.username]){
    res.send(data[req.params.username])
    res.end()
  }else{
    res.send('Failed to get data!')
    res.end()
  }
})

app.listen(4915,function(){
  console.log('Listening.')
})
