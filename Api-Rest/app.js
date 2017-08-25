const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const api = require('./modules/routes');

function initMiddlewares() {
    app.use(bodyParser.urlencoded({extended: true }));
    app.use(bodyParser.json());
}

function initRoutes() {
    app.use('/api', api);
}


function init() {

    initMiddlewares();
    initRoutes();

    app.listen(5000, () => {
        console.log("Started application");
        console.log("Host: " + 'http://localhost:'+ 5000);
    });

}

init();