var mongoose = require("mongoose");

var config = require('config');
var mongoURL = config.dbUrl;

var db;
var connected = false;

/**
 * Connects to the MongoDB Database with the provided URL
 */
var connect = function(callback){
    mongoose.connect(mongoURL, { useMongoClient: true }, function(err, _db){
    if (err) { 
      callback(err); 
    } else {
      db = _db;
      connected = true;
      callback(null);
    }
  });
};

/**
 * Returns the collection on the selected database
 */
var getCollection = function(name,callback){
  if (!connected) {
    throw new Error('Must connect to Mongo before calling "collection"');
  } else {
    callback(null,db.collection(name));
  }
};

var getDb = function(){
  return db;
}

exports.connect = connect;
exports.getCollection = getCollection;
exports.getDb = getDb;