const connection = require("./../../db/db");
const bcrypt = require("bcrypt");

const createNewAccount = async (req, res) => {
    const { username, email, password, phoneNumber } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO users(username,email,pass,phoneNumber) VALUES (?,?,?,?);`;
        const data = [username, email.toLowerCase(), hashedPassword, phoneNumber];

        connection.query(query, data, (err, result) => {
            if (err) res.status(404).json(err);
            res.status(201).json("User Added");
            
        });
    } catch (error) {
        console.log(error);
        res.status(404).json("Failed to create Account");
    }
};
const getId = (req,res)=>{
    const email=req.params.email;
    const query= 'SELECT id FROM users WHERE email =?;';
    const data=[email];
    connection.query(query,data,(err,result)=>{
        if(err) res.status(404).json(err)
        res.status(200).json(result)
    });
}
const getUserData = (req,res)=>{
    const id=req.params.id;
    const query= 'SELECT username,email,phoneNumber FROM users WHERE id =?;';
    const data=[id];
    connection.query(query,data,(err,result)=>{
        if(err) res.status(404).json(err)
        res.status(200).json(result)
    });
}

module.exports = {
    createNewAccount,
    getUserData,
    getId,
};
