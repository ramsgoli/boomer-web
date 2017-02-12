const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8000);

app.get('/', function(req, res) {
    res.render('login');
});

app.get('/home', function(res, res) {
    res.render('landing');
})

app.listen(app.get('port'), function() {
    console.log('listening on port ', app.get('port'));
});
