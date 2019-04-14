import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { Home, NotFound, Payments, ListActors } from "./pages";
import { PrivateRoute, Login } from "./components";
import { setToken } from "./redux/actions/authentication";

class AppRouter extends React.Component {
  componentDidMount() {
    this.props.setToken()
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/login' component={Login} />
          <PrivateRoute path="/payments" component={Payments} />
          <PrivateRoute path="/list/:rol" component={ListActors} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}



export default connect(null, { setToken })(AppRouter);
