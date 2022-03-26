const connection = require("./../../db/db");

const getUserActivity =(req,res)=>{
    const id=req.params.id;
    const query='SELECT * FROM user_activity WHERE userId =?;';
    const data=[id];
    connection.query(query,data,(err,result)=>{
        if(err) res.status(404).json(err)
        res.status(200).json(result)
    })
}

const addActivity =(req,res)=>{
    const time =new Date();
    const {userId,type,details}=req.body
    const query='INSERT INTO user_activity(userId,activity_type,created_at,more_details)VALUES(?,?,?,?);';
    const data=[userId,type,time,details]
    connection.query(query,data,(err,result)=>{
        if(err)res.status(404).json(err)
        res.status(201).json(result);
    })
}

module.exports ={
    getUserActivity,
    addActivity
}