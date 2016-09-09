var mongo = require('koa-mongo');
var mongoose = require('mongoose');
var app = require('./app.js');
// app.use(mongo({
//     // uri: 'mongodb://admin:12345@localhost:27017/test',
//     host: '',
//     port: 27017,
//     user: '',
//     parss: '',
//     db: '',
//     max: 100,
//     min: 1,
//     timeout: 30000,
//     log: false
// }))
mongoose.connect('mongodb://localhost/NBbrain');
var db = mongoose.connection;
db.on('error', function(){})
db.once('open', function(){

})
module.exports = mongoose;




