const http = require('http');
const port = process.env.PORT || 3000;
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;
var shell = require('shelljs');

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};



const express = require('express')
const app = express()


app.get('/restart', (req,res)=>{
  //restart or create a new instance of the server
  shell.exec('forever restart /home/juan/Escritorio/test/webminTest/node1/node-hello/index.js');
  console.log('restarting nodejs');
  // then reply
  res.json({
      'message': 'server restarted successfully'
     })
  })

app.get('/', (req, res) => {
  console.log('connected');
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
