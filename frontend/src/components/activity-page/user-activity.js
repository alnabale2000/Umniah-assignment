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
        <section className='activity-container'>
            <div>
                <h4>Activity Type</h4>
                <h4>Date</h4>
                <h4>More Details</h4>
            </div>
            {activities && activities.map((activity)=>(
                <div key={activity.id}>
                    <h5>{activity.activity_type}</h5>
                    <h5>{activity.created_at}</h5>
                    <h5>{activity.more_details}</h5>
                </div>

            ))}
            
        </section>
    )
}

export default Activity;