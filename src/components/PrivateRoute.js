import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
  
  render() {
    const { component: Component, isLoggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )
        }
      />
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);
