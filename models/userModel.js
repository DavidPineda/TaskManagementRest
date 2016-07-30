let models = require('./models');
let Schema = models.Schema;

let userSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phone: {type: String},
    password: {type: String}
});

userSchema.methods = {
    authenticate: function (password) {
        return this.password === password;
    }
}

let User = models.model('User', userSchema, 'users');
module.exports = User;