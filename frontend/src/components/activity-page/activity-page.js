import React from 'react'
import UserInfo from './user-data'
import Activity from './user-activity';

const ActivityPage = () => {
    return (
        <main className='activity-page'>
            <UserInfo/>
            <Activity/>
        </main>
    )
}

export default ActivityPage