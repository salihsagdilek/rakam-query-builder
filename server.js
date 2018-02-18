var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
app = express()
app.use(express.static(__dirname + '/dist'));
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port);
console.log("server started on port " + port);
