const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            password: 'cookies',
            email: 'john@gmail.com',
            entries: 0,
            joined: new Date()
        }
    ]
}