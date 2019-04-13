import React from 'react';
import styles from './Login.module.css'

function Login(){
    return(
        
            <div className={styles.btnContainer}>
                <a href="http://localhost:3001/login"><button className={styles.btn}>Login</button></a>
            </div>

    )
}

export default Login;
