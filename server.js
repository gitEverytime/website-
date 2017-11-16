//线上启动web服务器配置
var express = require("express");
var proxy = require('http-proxy-middleware');
var app = express();

app.use(express.static("dist")).listen(17777);
// Add middleware for http proxying
var apiProxy = proxy('/user', { target: 'http://192.168.1.19:8087',changeOrigin: true });//将服务器代理到localhost:8080端口上[本地服务器为localhost:3000]
app.use('/user/*', apiProxy);//api子目录下的都是用代
var apiProxy1 = proxy('/performance', { target: 'http://192.168.1.19:8087',changeOrigin: true });//将服务器代理到localhost:8080端口上[本地服务器为localhost:3000]
app.use('/performance/*', apiProxy1);//api子目录下的都是用代
