import React from 'react';
import DashboardHeader from './DashboardHeader'
import styles from './Dashboard.module.css'

function Dashboard(){

    return(
        <>     
            <DashboardHeader />
                <div className={styles.dashboardAmountContainer}>
                    <div className={styles.dashboardAmount}>
                        <span>Saldo disponible</span>
                        <br/>
                        <span>1000000$</span>
                    </div>
                    <div className={styles.dashboardAmount}>
                        <span>Saldo pendiente</span>
                        <br/>
                        <span>1000000$</span>
                    </div>
                    <div className={styles.dashboardAmount}>
                        <span>Saldo total</span>
                        <br/>
                        <span>1000000$</span>
                    </div> 
                </div>
                <div className="dashboardCallToAction">
                    <h1>Realizar pagos</h1>
                    <button className={styles.dashboardBtn}>Estudiantes</button>
                    <button className={styles.dashboardBtn}>Profesores</button>
                </div>
                
        </>  
    )
}

export default Dashboard;
