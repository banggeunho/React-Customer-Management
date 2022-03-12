const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM customer",
        (err, rows, fields) => {
            res.send(rows);
        }              
    );

});

app.listen(port, () => console.log(`Listening on port ${port}`));