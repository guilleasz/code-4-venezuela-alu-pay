import React from 'react';
import styles from '../pages/Dashboard.module.css'
function DashboardAmount(){
    return(
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
        </div>
    )
}

export default DashboardAmount