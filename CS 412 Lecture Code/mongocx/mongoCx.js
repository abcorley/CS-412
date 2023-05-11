//singleton connector for mongo
//critical section = code that can't run concurrently (use semaphores, singletons)

// npm install mongodb
const { MongoClient } = require('mongodb');
const mongoURL = 'mongodb://127.0.0.1:27017/cs412';

let _db = null; //connection

module.exports = {

    getDB: async dbName => {
        //if we have a conx, just return it
        if (_db) {
            return _db;
        } else {
            //set semaphore entering critical section
            let _client = new MongoClient(mongoURL); //connect to db
            await _client.connect();
            _db = _client.db(dbName);
            //release semaphore
            return _db;
        }
    }
}
