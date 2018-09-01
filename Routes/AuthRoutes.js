const AuthCon = require("../Controllers/AuthController");

module.exports = app => {
    app.post("/login", AuthCon.login);
}