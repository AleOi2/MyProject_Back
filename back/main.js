const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const router = require('./routes/router');
const port = process.env.PORT || 3000;                  // É permitido a expressão: PORT=4444 node main.js

app.use(cors());                                        // cross origin resouces sharing - segurança, permite o que podem fazer post/get/put ...
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, function(){
    console.log(process.env.PORT);
    console.log("Estou escutando a porta " + port);
})