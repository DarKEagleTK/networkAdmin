//base var
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const bodyParser = require('body-parser');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
var indexRouter = require('./routes/index');
var docRouter = require('./routes/documentation');
var confRouter = require('./routes/configurateur');

app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/documentation', docRouter);
app.use('/configurateur', confRouter);


//app
app.listen(port, () => {
    console.log('Lunched')
});