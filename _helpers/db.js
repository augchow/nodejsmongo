const dbconfig = require('config.json');
const bluebird = require('bluebird');


const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};






// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });