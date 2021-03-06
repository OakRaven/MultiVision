var mongoose = require('mongoose');

module.exports = function(config){
  mongoose.connect(config.db);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback(){
    console.log('multivision database opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String
  });

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0){
      User.create({firstName: 'Mike', lastName: 'Hatfield', username: 'mike'})
      User.create({firstName: 'Tracy', lastName: 'Ouellette', username: 'tracy'})
      User.create({firstName: 'Ken', lastName: 'Acker', username: 'ken'})
    }
  });
};
