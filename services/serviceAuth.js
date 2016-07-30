var jwt = require('jwt-simple');  
var moment = require('moment');  
var config = require('./../config/config');

// Creamos el Token del usuario que se envia al momento
// de crear un usuario o al momento de logearnos 
exports.createToken = function(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(1, "days").unix(),
  };
  return jwt.encode(payload, config.jwtSecret);
};

// Validamos el token de autenticación del usuario para
// cada petición que se requiera
exports.ensureAuthenticated = function(req, res, next) {    
  if(!req.headers.authorization) {
    return res.status(403).send({message: "Tu petición no tiene cabecera de autorización"});
  }

  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, config.jwtSecret);

  if(payload.exp <= moment().unix()) {
     return res.status(401).send({message: "El token ha expirado"});
  }

  req.user = payload.sub;
  next();
};