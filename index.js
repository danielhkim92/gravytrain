const express = require('express');
const app = express();
require('./db/db');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const homeController = require('./controllers/home')
const authorController = require('./controllers/roots')
const articleController = require('./controllers/factories')
const authorController = require('./controllers/numbers')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

app.use('/roots', rootController);
app.use('/factories', factoryController);
app.use('/',  homeController)







app.listen(3000, () => {
	console.log("The 3000 port is working")
});