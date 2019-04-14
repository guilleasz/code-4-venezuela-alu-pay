import React from "react";
import { connect } from "react-redux";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";
import upholdImage from "../uphold@2x.png";
import alumnUSBLogo from "../logo.jpg";

const Login = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <div className={styles.btnContainer}>
        <p>
          <img src={alumnUSBLogo} alt="" height="250px" width="250px" />
        </p>
        <a href="http://localhost:3001/login">
          <img src={upholdImage} alt="" height="41px" width="206px" srcset="" />
        </a>
      </div>
    );
  }
  return <Redirect to="/" />;
};

const mapDispatchToProps = ({ isLoggedIn }) => ({
  isLoggedIn
});

export default connect(mapDispatchToProps)(Login);
