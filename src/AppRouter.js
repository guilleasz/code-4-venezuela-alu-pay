import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Home, NotFound, Payments, ListActors } from "./pages";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route path="/payments" component={Payments} />
          <Route path="/list" component={ListActors} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
