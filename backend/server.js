const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();


//built-in middlewares
app.use(express.json());

//routers
const usersRouter = require("./routers/routes/users");
const authRouter = require ("./routers/routes/auth");
const usersActivityRouter= require("./routers/routes/user_activity")
//third-party middleware
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST,PUT, OPTIONS");
    next();
});

//app routers
app.use(usersRouter);
app.use(authRouter);
app.use(usersActivityRouter);


const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
