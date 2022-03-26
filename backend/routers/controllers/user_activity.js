const connection = require("./../../db/db");

const getUserActivity =(req,res)=>{
    console.log('t1');
    const id=req.params.id;
    const query='SELECT * FROM user_activity WHERE userId =?;';
    const data=[id];
    connection.query(query,data,(err,result)=>{
        if(err) res.status(404).json(err)
        res.status(200).json(result)
    })
}

module.exports ={
    getUserActivity,
}