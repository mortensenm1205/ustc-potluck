const { MongoClient } = require('mongodb');

// Local MongoDB connection with Promises
// for resuable db connection pools.  
let connect = () => {
    return new Promise((res, rej) => {
        MongoClient.connect(
            "mongodb://localhost:27017/ustc-potluck",
            { useNewUrlParser: true },
            (err, database) => {
                if (err) rej(err)
                res(database.db());
        })
    })}

module.exports = { connect };
