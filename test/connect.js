var Promise = require('bluebird');

var connect = function() {
        var connection_details = {};
        try {
            var connection_details = require('./db.json');
        } catch (e) {
            console.debug('Checking for connection details in env variables');
        }

        /**
         * Connect to db
         */
        const MongoClient = require('mongodb').MongoClient;

        var server = connection_details.MONGO_SERVER || process.env.MONGO_SERVER || undefined;
        var user = connection_details.MONGO_USER || process.env.MONGO_USER || undefined;
        var pw = connection_details.MONGO_PW || process.env.MONGO_PW || undefined;

        console.log(`Connecting to server: ${server}`);

        if(!server || !user || !pw ) {
            throw new Error('Missing connection details.');
        }

        var DB_URI = `mongodb://${user}:${pw}@${server}`;

        return MongoClient.connect(DB_URI, {promiseLibrary: Promise});
}

module.exports = connect;