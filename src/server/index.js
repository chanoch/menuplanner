#!/usr/bin/env node

/**
 * Module dependencies.
 */

var debug = require('debug')('menuplanner:server');
var http = require('http');
var Promise = require('bluebird');

/**
 * Get port from environment to store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');

var app = require('./app');
app.set('port', port);

/**
 * Connect to db
 */
const MongoClient = require('mongodb').MongoClient;

if(process.env.MONGO_SERVER) { 
    var DB_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_SERVER}`;
    MongoClient.connect(DB_URI, {promiseLibrary: Promise})
    .catch(err => {
        console.error(`Can't connect to mlab ${err.stack}`);
    })
    .then(db => {
        if(db) {
            app.locals.db = db.db('wiggers_menu');
        }
    });
} else {
    console.error('Starting without mongo! NO MENUS WILL WORK.');
}

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
