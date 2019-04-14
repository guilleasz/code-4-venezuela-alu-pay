import React from 'react';
import Header from '../components/Header'
import styles from './Dashboard.module.css'
import DashboardAmount from '../components/DashboardAmount'
import { Link } from 'react-router-dom'

function Dashboard(){

    return(
        <>     
            <DashboardAmount/>
            <Header />

                    <div className={styles.dashboardCTAWrapper}>
                        <div className={styles.dashboardCTA_align}>
                            <h1>REALIZAR TRANSFERENCIAS</h1>
                            <div className={styles.dashboardCTA_align_row}>
                                <Link to='/payments/students' className={styles.dashboardBtn}>ESTUDIANTES</Link>
                                <Link to='/payments/professors' className={styles.dashboardBtn}>PROFESORES</Link>
                            </div>
                        </div>
                    </div> 
           
                
        </>  
    )
}

export default Dashboard;
