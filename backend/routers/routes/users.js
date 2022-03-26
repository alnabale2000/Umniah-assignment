const express = require("express");

const { createNewAccount,getUserData} = require("./../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/users", createNewAccount);
usersRouter.get("/users/:id", getUserData);


module.exports = usersRouter;