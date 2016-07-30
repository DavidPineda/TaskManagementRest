let express = require("express"),
    app = express();
    server = require('http').createServer(app);

require("./config/express")(app);
require("./config/routes")(app);

server.listen(3000, function () { 
    console.log("Node server running on http://127.0.0.1:3000");
});