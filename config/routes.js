let userCtrl = require('../controllers/userCtrl');
let service = require('./../services/serviceAuth');

// Modulo de rutas
module.exports = function(app) {

    // Registro de usuarios en la db
    app.post("/api/signUp", userCtrl.signUp);

    // Autenticación de usuario
    app.post("/api/login", userCtrl.login);    

    // Test
    app.get("/api/user", service.ensureAuthenticated, function(req, res) {
        res.status(200).send("Muy Bien");
    });  
} 