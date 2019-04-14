import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authenticate } from '../redux/actions/authentication'

class PrivateRoute extends React.Component {
  state = { loading: true }

  componentDidMount() {
    this.props.authenticate()
      .then(() => this.setState({ loading: false }))
  }

  render() {
    const { component: Component, isLoggedIn, ...rest } = this.props;
    const { loading } = this.state
    if (loading) return null
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

export default connect(mapStateToProps, { authenticate })(PrivateRoute);
