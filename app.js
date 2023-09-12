// const routes = require('./routes-old-node-way-to-define.js');  --> node way to define routes 

const path = require('path');
//exporting express
const express = require('express');
const bodyParser = require('body-parser');

//defining routes to main app
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

//using express ethod to create app
const app = express();

//middleware parsing req
app.use(bodyParser.urlencoded({extended: false}));

//to allow some static file contect to access in browser
app.use(express.static(path.join(__dirname, 'public')));

//using routes in app
app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
})

app.listen(3001);
