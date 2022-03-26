const express = require("express");

const { createNewAccount,getUserData,getId} = require("./../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/users", createNewAccount);
usersRouter.get("/users/:id", getUserData);
usersRouter.get("/user/:email", getId);



module.exports = usersRouter;