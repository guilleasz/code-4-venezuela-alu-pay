import React from "react";
import { Route, Redirect } from 'react-router-dom'
import PaymentsDashboard from '../components/PaymentsDashboard'


class Payments extends React.Component {

  render() {
    const { match } = this.props

    return (
      <div>
        <Route path={match.path} exact render={() => <Redirect to='/home' />} />
        <Route path={`${match.path}/:type`} component={PaymentsDashboard} />
      </div>
    );
  }
}

export default Payments;
