"use strict"

const express = require("express");
const userController = require("../controllers/user.controller")
var authentication = require("../middlewares/authenticated");

var user = express.Router();
user.post("/login", userController.login)
user.post("/register", userController.register);
user.post("/admin", authentication.ensureAuth, userController.admin);
user.post("/edituser/:idUser", authentication.ensureAuth, userController.editUser);
user.post("/users", authentication.ensureAuth, userController.users);
user.post("/deleteuser/:idUser", authentication.ensureAuth, userController.deleteUser);

module.exports = user;