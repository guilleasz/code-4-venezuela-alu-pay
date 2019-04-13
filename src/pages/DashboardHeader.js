import React from 'react';
import styles from './DashboardHeader.module.css'

function DashboardHeader(){

    return(     
            <header className={styles.dashboardHeaderContainer}>
                <div className={styles.dashboardAdminTitle}>
                    <div className={styles.dashboardAdminTitleLeft}>
                        <span>Alumn USB</span>
                    </div>
                    <div className={styles.dashboardAdminTitleRight}>
                        <span>
                            Inicio
                        </span>
                        <span>
                            Admin ->
                        </span>
                    </div>
                </div>
 
            </header>
    )
}

export default DashboardHeader;
