import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router'
import Dashboard from "./Dashboard";
import { setToken } from '../redux/actions/authentication'

class Home extends React.Component {

  componentDidMount() {
    const { location, setToken } = this.props
    const query = new URLSearchParams(location.search)
    setToken(query.get('token'))
  }

  render(){
  const { token } = this.props;
  if (token) {
    return (
      <div className="d-flex flex-column justify-content-between container-page">
        <div className="mb-4 mt-4 container">
          <Dashboard />
        </div>
      </div>
    );
  }
  return <Redirect to='/login' />;
  }
};

const mapStateToProps = state => ({
  token: state.token
});

const mapDispatchToProps = () => ({
  setToken
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
