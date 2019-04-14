import React from 'react';
import Header from '../components/Header'
import styles from './Dashboard.module.css'
import { Link } from 'react-router-dom'

function Dashboard(){

    return(
        <>     
            <Header />
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardAmountContainer}>
                    <div className={styles.dashboardAmount}>
                        <span>SALDO TOTAL</span>

                        <span>USD $15.00 </span>
                    </div>
                    <div className={styles.dashboardAmount}>
                        <span>SALDO DISPONIBLE</span>

                        <span>USD $10.00 </span>
                    </div>
                    <div className={styles.dashboardAmount}>
                        <span>SALDO PENDIENTE</span>
     
                        <span>USD $5.00 </span>
                    </div> 
 
                </div>
                    <div className={styles.dashboardCTAWrapper}>
                        <div className={styles.dashboardCTA_align}>
                            <h1>REALIZAR TRANSFERENCIAS</h1>
                            <div className={styles.dashboardCTA_align_row}>
                                <Link to='/payments/students' className={styles.dashboardBtn}>ESTUDIANTES</Link>
                                <Link to='/payments/professors' className={styles.dashboardBtn}>PROFESORES</Link>
                            </div>
                        </div>
                    </div> 
            </div>
                
        </>  
    )
}

export default Dashboard;
