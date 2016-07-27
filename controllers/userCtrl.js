let User = require('../models/userModel');

//POST - Inserta un nuevo usuario en la DB
exports.addUser = function (req, res) {
    
    let user = new User()
    
    user.firstName = req.body._firstName;
    user.lastName = req.body._lastName;
    user.email = req.body._email;
    user.phone = req.body._phone;
    user.password = req.body._password;

    user.save(function (err, user) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(user);
    });
};