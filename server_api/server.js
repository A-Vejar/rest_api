// Initialized Express
const express = require('express');
const mysql = require('mysql');
const conn = require('express-myconnection');
const PORT = 8080;

// routes.js
const routes = require('./routes');

// Set port
const app = express();
app.set('port', process.env.PORT || PORT);

// Set database connection
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'wsaap',
    password: 'wsaap321',
    database: 'vehicles'
};

// Middlewares
app.use(conn(mysql, dbOptions, 'single'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Testing ...');
});
app.use('/api', routes);

// Execute Server: 'npm run start'
app.listen(app.get('port'), () => {
    console.log(`Server running on PORT ${app.get('port')} ...`);
});