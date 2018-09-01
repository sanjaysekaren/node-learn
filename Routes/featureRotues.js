const AuthController = require("../Controllers/AuthController");

module.exports = app => {
    app.post("/login", AuthController.login);
    app.post("/signup", AuthController.signup);
}