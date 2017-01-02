/*
@title Write docusment to MongoDB
*/

var MongoClient = require('mongodb').MongoClient;

module.exports = function(req, res, next){
  this.mongodb.creds().then((cred) => {
    MongoClient.connect(cred.connection_string, function(err, db) {
      if (err) {
        return res.status(500).send(err);
      }
      
      var collection = db.collection('people');
      collection.insert({ name : 'john smith' }, (err, result) => {
        if (err) {
          return res.status(500).send(err);
        }
        
        res.send(result);
        
        db.close();
      });
    });
  })
  .catch((err) => res.status(err.statusCode || 500).send(err));
};