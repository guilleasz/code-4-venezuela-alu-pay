import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, authenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          authenticated.isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authentication
});

export default connect(mapStateToProps)(PrivateRoute);
