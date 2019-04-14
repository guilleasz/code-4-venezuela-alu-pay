import React from "react";
import { connect } from 'react-redux'
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";


const Login = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <div className={styles.btnContainer}>
        <a href="http://localhost:3001/login"><button className={styles.btn}>Login</button></a>
      </div>
    );
  }
  return <Redirect to='/' /> 
}

const mapDispatchToProps = ({ isLoggedIn }) => ({
  isLoggedIn
})

export default connect(mapDispatchToProps)(Login)
