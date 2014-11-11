var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://mhatfield:multivision@ds051980.mongolab.com:51980/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};
