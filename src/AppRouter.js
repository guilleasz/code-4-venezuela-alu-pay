import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Home, NotFound, Payments, ListActors } from "./pages";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ListActors} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/payments/:Types" component={Payments} />
      <Route exact path="/list/:Types" component={ListActors} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
