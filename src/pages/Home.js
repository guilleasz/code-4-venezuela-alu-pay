import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import Dashboard from "./Dashboard";

const Home = props => {
  const {
    authenticated: { isLoggedIn }
  } = props;
  if (isLoggedIn) {
    return (
      <div className="d-flex flex-column justify-content-between container-page">
        <div className="mb-4 mt-4 container">
          <Dashboard />
        </div>
      </div>
    );
  }
  return <Login />;
};

const mapStateToProps = state => ({
  authenticated: state.authentication
});

export default connect(mapStateToProps)(Home);
