var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function (err, db){
    if(err) throw err;
    console.log('database createServer');
    db.close();
});