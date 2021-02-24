/**
 * Login Screen
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    //Function called on click of login button
    loginUser = () => {
        let username = document.getElementById('username').value;
        if (username) {
            //Set username in redux
            this.props.loginUserData({username});
        }
        //Navigate to the next page of employee list
        this.props.history.push({
            pathname: '/emp-list'
        })
    }

    render() {
        return (
            <div className="app-login">
                <div className="main-login">
                    UserName <input id="username" className="username input" type="text"/>
                    <div className="login-button">
                        <button onClick={this.loginUser}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
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

export default connect("", mapDispatchToProps)(Login)