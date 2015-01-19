'use strict';

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(Number(process.env.PORT || 8000), function () {
    console.log('Openwire-UI running on port ' + 8000);
});