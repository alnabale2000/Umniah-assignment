import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Activity = () => {
    const [activities, setActivities] = useState();
    const id =localStorage.getItem('id');
    useEffect(() => {
        getAllActivities()
    },[])

    const getAllActivities=async ()=>{
        const result=await axios.get(`http://localhost:8000/user-activity/${id}`)
        setActivities(result.data);
    }

    
    
    return (
        <div className='activity-container'>
            <header className='flex-box space-b'>
                <h4 className='act-title'>Activity Type</h4>
                <h4 className='act-title'>Date</h4>
                <h4 className='act-title'>More Details</h4>
            </header>
            {activities && activities.map((activity)=>(
                <div className ='flex-box space-b' key={activity.id}>
                    <p className='act-info'>{activity.activity_type}</p>
                    <p className='act-info'>{activity.created_at}</p>
                    <p className='act-info'>{activity.more_details}</p>
                </div>
            ))}        
        </div>
    )
}

export default Activity;