import React from "react";
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom'
import Dashboard from "./Dashboard";
import { authenticate } from '../redux/actions/authentication'

class Home extends React.Component {

  state = { loading: true  }

  componentDidMount() {
    const { location, authenticate, history } = this.props
    const query = new URLSearchParams(location.search)
    console.log('mounted', query.get('code'))
    authenticate(query.get('code'))
      .then(() =>  {
        this.setState({ loading: false })
        const newQuery = new URLSearchParams(location.search)
        if (newQuery.get('code')) history.replace('/')
      })
  }

  render(){
    const { isLoggedIn } = this.props
    if (this.state.loading) return null
    return (
      isLoggedIn ?
        <div className="d-flex flex-column justify-content-between container-page">
          <div className="mb-4 mt-4 container">
            <Dashboard />
          </div>
        </div>
      : <Redirect to='/login' />
    );
  }
};

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (code) => dispatch(authenticate(code))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
