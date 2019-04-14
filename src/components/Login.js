import React from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { fetchAuthentication } from "../redux/actions/authentication";

function Login(props) {
  return (
    <div className={styles.btnContainer}>
      <a href="#">
        <button className={styles.btn} onClick={props.fetchAuthentication}>
          Login
        </button>
      </a>
    </div>
  );
}

const mapDispatchToProps = () => ({
  fetchAuthentication
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
