let jwt = require('jwt-simple');
let User = require('../models/userModel');
let service = require('./../services/serviceAuth');

//POST - Inserta un nuevo usuario en la DB
exports.signUp = function (req, res) {    
    let user = new User();    
    user.firstName = req.body._firstName;
    user.lastName = req.body._lastName;
    user.email = req.body._email;
    user.phone = req.body._phone;
    user.password = req.body._password;

    user.save(function (err, user) {
        if (err) return res.send(500, err.message);
        res.status(200).send({token: service.createToken(user), success: true});
    });
};

//POST - Valida las credenciales de usuario en la app
exports.login = function(req, res){
    User.findOne({email: req.body._email.toLowerCase()}, function(err, user){
        if (err) return res.send(500, err.message);
        if(user){
            if(user.authenticate(req.body._password))
                res.status(200).send({token: service.createToken(user), success: true});
            else
                res.send(403, {message: "Password de usuario incorrecto", success: false});    
        }                        
        else{
            res.send(403, {message: "El usuario no se encontro en la DB", success: false});
        }            
    });
};