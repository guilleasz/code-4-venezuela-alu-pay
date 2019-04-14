import React from 'react';
import styles from './Header.module.css'

function DashboardHeader(){

    return(     
            <header className={styles.HeaderContainer}>
                <div className={styles.AdminTitle}>
                    <div className={styles.AdminTitleLeft}>
                        <span>Alumn USB logo</span>
                    </div>
                    <div className={styles.AdminTitleRight}>
                            <span>
                                Realizar transferencias
                            </span>
                            <span>
                                Contactos
                            </span>
                            <span>
                                Logout
                            </span>
                    </div>
                </div>
 
            </header>
    )
}

export default DashboardHeader;
