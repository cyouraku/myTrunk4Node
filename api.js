var express = require('express');
//#var bodyParser = require('body-parser');
//#var gcm = require('node-gcm');
var app = express();

//#app.use(bodyParser.urlencoded({ extended : false }));
//#app.use(bodyParser.json());

//app.use(express.static("WebContent"));
//app.use(express.static("cocos_dou"))
//app.use(express.static("AnimalContent"));
app.use(express.static("AnimalContentLocal"));
//app.listen(8887,'192.168.56.201');
app.listen(8080,"localhost");
console.log("HTML Server Started!Port 8887");


