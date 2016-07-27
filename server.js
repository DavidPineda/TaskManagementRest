let express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    cors = require('cors');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// Import Models and controllers
var userCtrl = require("./controllers/userCtrl");

// API routes
var users = express.Router();

users.route("/users")
    //.get(userCtrl.findAllUsers)
    .post(userCtrl.addUser);

app.use("/api", users);

// Start server
app.listen(3000, function () { 
    console.log("Node server running on http://127.0.0.1:3000");
});