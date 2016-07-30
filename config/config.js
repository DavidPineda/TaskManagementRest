module.exports = {
    jwtSecret: process.env.TOKEN_SECRET || "tokenultrasecreto",
    jwtSession: {session: false}    
};