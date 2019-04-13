import React from 'react';
import DashboardHeader from '../components/DashboardHeader'
import styles from './Dashboard.module.css'

function Dashboard(){

    return(
        <>     
            <DashboardHeader />
                <div className={styles.dashboardContainer}>
                    <h1>This is the Dashboard</h1>
                </div>
        </>  
    )
}

export default Dashboard;
