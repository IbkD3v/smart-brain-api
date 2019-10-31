const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            password: 'cookies',
            email: 'john@gmail.com',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            password: 'bananas',
            email: 'sally@gmail.com',
            entries: 0,
            joined: new Date()  
        }
    ]
}

app.use(bodyParser.json());
app.use(cors())

app.get('/', (req,res)=>{
    res.send(database.users);
})