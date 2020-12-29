require('dotenv/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Config Ports and HOST
const configs = {
    port: process.env.PORT || 8080,
    host: process.env.HOST || "127.0.0.1"
}

// Config Server
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
// Config Views
app.use(express.static(path.resolve(__dirname,'..','..','public')));
app.set('views',path.resolve(__dirname,'../','views'));
app.set('view engine','ejs');


// routes 
const routes = require('../routes/users.routes');
app.use(routes);

module.exports = {
    app,
    configs
};
