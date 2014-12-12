//Requirements
var express 		= require('express');
var lessMiddleware 	= require('less-middleware');
var jade 			= require('jade');
var app 			= express();


//Set engine jade and view folder
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');

//Let less know where the files are
app.use(lessMiddleware(__dirname + '/public/'));
app.use(express.static(__dirname + '/public/'));

//Server listen to specified port
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

app.get('/', function (req, res) {
  res.render('index');
});
