import React from 'react';
import styles from './Header.module.css'
import logo from '../logo.jpg'
function DashboardHeader(){

    return(     
            <header className={styles.HeaderContainer}>
                <div className={styles.AdminTitle}>
                    <div className={styles.AdminTitleLeft}>
                        <img src={logo}alt="Alumn USB" height="90px" widht="90px"/>
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
