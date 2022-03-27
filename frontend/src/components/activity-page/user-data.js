import axios from 'axios'
import React, { useEffect, useState } from 'react'


const UserInfo = () => {
    const id =localStorage.getItem('id')
    const [data, setData] = useState()
    useEffect(() => {
        getUserData()
    },[])
    

    const getUserData= async()=>{
        const result=await axios.get(`http://localhost:8000/users/${id}`);
        setData(result.data[0]);
    }
    return (
        <aside className='user-info'>
            {data?(
                <div>
                    <p>Email: {data.email} </p>
                    <p>User Name: {data.username} </p>
                    <p>Phone Number: {data.phoneNumber} </p>
                </div>
            ):(
                <p>Loading...</p>
            )}
        </aside>
        
    )
}

export default UserInfo;