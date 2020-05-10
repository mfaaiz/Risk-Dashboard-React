//import { Router } from 'express';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost', // Your connection adress (localhost).
    user: 'root',     // Your database's username.
    password: '',        // Your database's password.
    database: 'risk manager'   // Your database's name.
});
// Starting our app.

/* var apm = require('elastic-apm-node').start({
    serviceName: 'risk-manager',
    serverUrl: 'http://localhost:8200'
}) */
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/', function (req, res) {
    // Connecting to the database.
/*      connection.getConnection(function (err, connection) {

        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT  Risk_Score FROM risk_reg WHERE Threat="Hackers or malware may attack and control systems that have not been detected, controlled, and monit" OR Threat="Malware may attack and system may be overloaded by misinformation because it hasn?t been detected in" OR Threat="Hackers or malware may attack and control systems that have not been detected" OR Threat="Hackers and viruses can easily attack the software using exploits." OR Threat="attacker may attack the patch that are not identified by openVAS" ', function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
            console.log("ll");
            console.log(results);
        });
    }); */
   connection.getConnection(function (err, connection) {

        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM input ',
         function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
           // console.log("ll");
            console.log(results);
        });
    }); 
}
);
//console.log(connection.connection.results);
// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/users so you can see the data.');
});
