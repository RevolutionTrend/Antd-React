const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.use('/', function (req, res, next) {
    console.log(`req.path === ${req.path}.`);
    if (req.path.indexOf('.cmd') > -1 || req.path.indexOf('.cgi') > -1) {
        next();
    } else {
        let pathname = req.path;
        if (req.path === '/' || req.path.indexOf('.') < 0) {
            pathname = '/index.html';
        }
        res.sendFile(__dirname + '/build' + pathname);
    }
});

const devices = [{
    deviceName: 'u2',
    icon: 2,
    interfaceType: 'Ethernet',
    ipAddress: '192.168.1.2',
    isActive: 1,
    macAddress: '00:0a:f7:88:80:b3'
}, {
    deviceName: 'u4',
    icon: 3,
    interfaceType: 'Wireless',
    ipAddress: '192.168.1.4',
    isActive: 1,
    macAddress: '00:0a:f7:88:80:b5'
}];

app.get('/device_table.cmd', function (req, res) {
    res.send(devices).end();
    // res.end(JSON.stringify(devices));
});

app.listen('3001', function () {
    console.log('runing on port 3001.')
});