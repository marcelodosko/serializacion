
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const BSON = require('bson')
var env = require('./env')
var app = express()
const port = env.PORT

console.log('port', env)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post('/serializar', function (req, res) {
    const serializado = JSON.stringify(req.body)
    const deserializado = JSON.parse(serializado)

  res.send({serializado,deserializado})
});

app.post('/bson', function (req, res){

    const serializado = BSON.serialize(req.body);
    const deserializado = BSON.deserialize(serializado);
    res.send({serializado, deserializado})
})

app.get('/', function (req, res){
  res.redirect('https://google.com')

})

app.listen(port, function () {
  console.log('Example app listening on port:', port);
});
