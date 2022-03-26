const express = require("express");

const {getUserActivity} = require("./../controllers/user_activity");

const usersActivityRouter = express.Router();

usersActivityRouter.get("/user-activity/:id", getUserActivity);


module.exports = usersActivityRouter;