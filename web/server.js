var express = require('express')
var app = express()

app.get('/data', function (req, res) {
    var j = {
        "leaderboard": [
            {
            "email": "don.browning@turner.com",
            "sum": 15
            },
            {
            "email": "mickey.yawn@turner.com",
            "sum": 2
            },
            {
            "email": "jeff.hyatt@turner.com",
            "sum": 1
            }
        ]
        }
  res.send(j);
})

app.get('/', function(req, res){
    res.sendfile
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})