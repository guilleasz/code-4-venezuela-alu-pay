import React from "react";
import styles from "./Header.module.css";
import logo from "../logo.jpg";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authentication";

class DashboardHeader extends React.Component {
  render() {
    return (
      <header className={styles.HeaderContainer}>
        <div className={styles.AdminTitle}>
          <div className={styles.AdminTitleLeft}>
            <img src={logo} alt="Alumn USB" height="90px" widht="90px" />
          </div>
          <div className={styles.AdminTitleRight}>
            <span>Realizar transferencias</span>
            <span>Contactos</span>
            <span>
              <a href="#" onClick={() => this.props.logout()}>
                Logout
              </a>
            </span>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = {
  logout
};

export default connect(
  null,
  mapDispatchToProps
)(DashboardHeader);
