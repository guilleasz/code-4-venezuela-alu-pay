import React from 'react';
import styles from './DashboardHeader.module.css'

function DashboardHeader(){

    return(     
            <header className={styles.dashboardHeaderContainer}>
                <div className={styles.dashboardAdminTitle}>
                    Admin Info
                </div>
                <h1>Pedro Perez {/* firstName lastName*/ }</h1>
                <span>
                    Balance: $100 {/* balances.total */}
                </span>
            </header>
    )
}

export default DashboardHeader;
