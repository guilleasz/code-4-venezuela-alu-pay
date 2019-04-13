import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Home, NotFound, Payments, ListStudents } from "./pages";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/payments" component={Payments} />
      <Route exact path="/list-students" component={ListStudents} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
