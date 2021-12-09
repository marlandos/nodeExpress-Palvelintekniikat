"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { request } from "http";
const cors_1 = __importDefault(require("cors"));
const logger = (req, res, next) => {
    console.log("logged");
    next();
};
const app = (0, express_1.default)();
app.use(logger);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: ['*'],
    methods: ['POST', 'GET', 'PUT']
}));
app.post('/post', (req, res, next) => {
    console.log('req.body' + req.body);
    let name = req.body.name;
    let age = parseFloat(req.body.age);
    let secretIdentity = req.body.secretIdentity;
    let power = req.body.power;
    res.send(`post ok, message: ${name} , ${age} , ${secretIdentity} , ${power} `);
});

app.get('/get2', (req, res, next) => {
    res.json(req.body);
    
});
// const axios = require('axios')

// axios.post('https://whatever.com/todos', {
//   todo: 'Buy the milk'
// })

// let jsonData = fetch('http://localhost:5001/');

// app.get('/', (req, res, next) => {
//     res.send(jsonData);
// });

app.put('/put', (req, res, next) => {
    res.send(`Put done`);
});
app.listen(5000, () => console.log("Backend 1 started"));
