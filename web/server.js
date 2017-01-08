var express = require('express')
var path = require('path');
var app = express()

app.use(express.static(path.join(__dirname, 'views')));

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
    res.sendFile('views/index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})