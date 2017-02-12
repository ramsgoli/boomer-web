const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 8000);


app.listen(app.get('port'), function() {
    console.log('listening on port ', app.get('port'));
});
