// server.js

// const express = require('express'),
//       path = require('path'),
//       bodyParser = require('body-parser'),
//       cors = require('cors'),
//       mongoose = require('mongoose'),
//       config = require('./config/DB'),
//       projectRoutes = require('./expressRoutes/projectRoutes');

// mongoose.Promise = global.Promise;
// mongoose.connect(config.DB).then(
//     () => {console.log('Database is connected') },
//     err => { console.log('Can not connect to the database'+ err)}
//   );

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// const port = process.env.PORT || 4000;

// app.use('/projects', projectRoutes);

// const server = app.listen(port, function(){
//   console.log('Listening on port ' + port);
// });

var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    //mongoose = require('mongoose'),    
    bodyParser = require('body-parser');
    cors = require('cors');

var mysql = require('mysql');

console.log('routes--', routes);
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projectmanagement'
});

connection.connect(function(err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./expressRoutes/projectRoutes');
app.use(routes); //register the routes


app.listen(port);


console.log('Project Management API server started on: ' + port);
