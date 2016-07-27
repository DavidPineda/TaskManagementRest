let mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/championships");

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function callback(){
    console.log('DataBase championships Open');
});

module.exports = mongoose;