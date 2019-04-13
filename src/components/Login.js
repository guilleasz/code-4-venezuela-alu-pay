import React from 'react';
import axios from 'axios';
import styles from './Login.module.css'

function Login(){
    function handleClick(e){
        const baseURL = "http://localhost:3001"
        e.preventDefault();
        axios.post(baseURL + "/api", )
            .then(res => console.log(res));
            
        ;
    }
    return(
        
            <div className={styles.btnContainer}>
                <button onClick={handleClick} className={styles.btn}>Login</button>
            </div>

    )
}

export default Login;
