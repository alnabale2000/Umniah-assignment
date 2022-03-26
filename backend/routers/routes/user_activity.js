const express = require("express");

const {getUserActivity,addActivity} = require("./../controllers/user_activity");

const usersActivityRouter = express.Router();

usersActivityRouter.get("/user-activity/:id", getUserActivity);
usersActivityRouter.post("/user-activity", addActivity);



module.exports = usersActivityRouter;