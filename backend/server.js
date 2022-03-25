const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();


//built-in middlewares
app.use(express.json());

//routers
const usersRouter = require("./routers/routes/users");

//third-party middleware
app.use(cors());

//app routers
app.use(usersRouter);


const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
