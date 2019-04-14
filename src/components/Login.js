import React from "react";
import { connect } from 'react-redux'
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";


const Login = ({ token }) => {
  if (!token) {
    return (
      <div className={styles.btnContainer}>
        <a href="http://localhost:3001/login"><button className={styles.btn}>Login</button></a>
      </div>
    );
  }
  return <Redirect to='/' /> 
}

const mapDispatchToProps = ({ token }) => ({
  token
})

export default connect(mapDispatchToProps)(Login)