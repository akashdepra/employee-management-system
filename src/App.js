/**
 * Main app class. Router is defined to load the component based on URL
 */
import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login.jsx';
import EmployeeList from './EmployeeList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/emp-list" component={EmployeeList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return {
		loginUserData(data) {
			dispatch({ type: 'LOGINUSER', data })
		}
	}
}

export default connect("", mapDispatchToProps)(App)
