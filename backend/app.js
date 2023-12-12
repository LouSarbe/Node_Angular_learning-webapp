"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var express = require("express");
var app = express();
var port = 3000; // default port to listen
app.use(express.json());
app.get('/api/test', function (req, res) {
    res.json({ message: 'Hello World!' });
});
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
