
var express = require('express')
var bodyParser = require('body-parser')
const BSON = require('bson')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post('/serializar', function (req, res) {
    const data = JSON.stringify(req.body)
    console.log(data)
    const doc_2 = JSON.parse(data)
    console.log(doc_2)
  res.send(req.body)
});

app.post('/bson', function (req, res){
    // Serialize a document
    const data = BSON.serialize(req.body);
    console.log('data:', data);

    // Deserialize the resulting Buffer
    const doc_2 = BSON.deserialize(data);
    console.log('doc_2:', doc_2);
    res.send(data)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
