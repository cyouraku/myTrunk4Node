var express = require('express');
//#var bodyParser = require('body-parser');
//#var gcm = require('node-gcm');
var app = express();

//#app.use(bodyParser.urlencoded({ extended : false }));
//#app.use(bodyParser.json());

//app.use(express.static("WebContent"));
app.use(express.static("cocos_dou"))
app.listen(8887,'192.168.56.201');
console.log("HTML Server Started!Port 8887");


